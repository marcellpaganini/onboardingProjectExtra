import { flow, types } from 'mobx-state-tree';
import { getOrders } from './ordersApi';
import { Order } from './Order';
import { InventoryItem } from '../inventory/InventoryItem';
import { Customer } from '../customers/Customer';
import { getInventoryItems } from '../inventory/inventoryApi';
import { getCustomers } from '../customers/customersApi';

export const OrderListStore = types
    .model("OrderListStore", {
        orders: types.maybe(types.array(Order)),
        inventoryItems: types.array(InventoryItem),
        customers: types.array(Customer)
    })
    .actions((self) => ({
        load: flow(function* () {
            self.inventoryItems = yield getInventoryItems();
            self.customers = yield getCustomers();
            self.orders = yield getOrders();
        })
    }))
    .views(self => ({
        get sortedOrders() {
            return self.orders?.slice().sort( (a, b) => a.customer!.firstName.localeCompare(b.customer!.firstName, undefined, { caseFirst: 'upper' })) ?? [];
        }
    }));