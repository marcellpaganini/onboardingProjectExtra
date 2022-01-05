import { flow, Instance, types } from 'mobx-state-tree';
import { getOrders } from './ordersApi';
import { Order } from './Order';
import { InventoryItem } from '../inventory/InventoryItem';
import { Customer } from '../customers/Customer';
import { getInventoryItems } from '../inventory/inventoryApi';
import { getOrderCustomers } from '../customers/customersApi';
import { helperFunctions } from '../common/formTools';

export const OrderListStore = types
    .model("OrderListStore", {
        orders: types.maybe(types.array(Order)),
        inventoryItems: types.array(InventoryItem),
        customers: types.array(Customer)
    })
    .actions((self) => ({
        load: flow(function* () {
            self.inventoryItems = yield getInventoryItems();
            self.customers = yield getOrderCustomers();
            self.orders = yield getOrders();
        })
    }))
    .views(self => ({
        get sortedOrders() {
            return self.orders?.slice().sort( (a, b) => a.customerId!.firstName.localeCompare(b.customerId!.firstName, undefined, { caseFirst: 'upper' })) ?? [];
        },

        get ordersPerCustomer(): any {       
            const newList = [{}]; 
            self.customers.map(({ id, fullName }) => {
                const total = self.orders?.filter(o => o.customerId?.id === id).length
                newList.unshift({label: fullName, value: total})    
            })
            
            return newList;
        },

        get ordersPerStatuses(): any {
            const newList = [{ label: "", value: 0}];
            
            self.orders?.map(({ status }) => {
                const total = self.orders?.filter(o => o.status === status).length
                newList.unshift({ label: helperFunctions.getStatus(status).toString(), value: total! })
            });

            //Removes default value and repeated objects from list
            const statuses = newList.filter((value, index, self) =>
                index === self.findIndex((o) => (o.label === value.label)));
            
            statuses.pop();

            return statuses;
        },

        get totalByTop5Customers(): any {
            const newList = [{ label: "", value: 0}];

            self.customers.map(({ id, fullName }) => {
                const totalOrderValue = self.orders?.reduce((total, order) =>
                order.customerId?.id === id ? total + order.totalPrice! : total + 0, 0);

                newList.unshift({ label: fullName, value: totalOrderValue! })
            })

            newList.pop();
            newList.sort((a, b) => a.value - b.value);

            return newList.slice(-5);
        }
    }));

    export type IOrderListStore = Instance<typeof OrderListStore>