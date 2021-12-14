import { flow, types } from 'mobx-state-tree';
import { deleteOrder, getOrder, saveOrder } from './ordersApi';
import { Order } from './Order';
import { InventoryItem } from '../inventory/InventoryItem';
import { Customer } from '../customers/Customer';
import { getInventoryItems } from '../inventory/inventoryApi';
import { getOrderCustomers } from '../customers/customersApi';


const defaultOrder = {
    status: 1
}

export const OrderEditorStore = types
    .model("OrderEditorStore", {
        order: types.optional(Order, () => Order.create({})),
        inventoryItems: types.array(InventoryItem),
        customers: types.array(Customer)
    })
    .actions((self) => ({
        load: flow(function* (id?: string) {
            self.inventoryItems = yield getInventoryItems();
            self.customers = yield getOrderCustomers();

            if(!id) {
                self.order = Order.create(defaultOrder);
                return;
            }
            const order = yield getOrder(id);

            self.order = order;
        }),

        save: flow(function* () {
            if (self.order) {
                self.order = yield saveOrder(self.order);
            }
        }),

        delete: flow(function* () {
            if (Order) {
                self.order = yield deleteOrder(self.order!);
            }
        })
    }));
    