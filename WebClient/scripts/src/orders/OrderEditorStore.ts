import { flow, types } from 'mobx-state-tree';
import { saveOrder } from './ordersApi';
import { Order } from './Order';
import { InventoryItem } from '../inventory/InventoryItem';
import { Customer } from '../customers/Customer';
import { getInventoryItems } from '../inventory/inventoryApi';
import { getCustomers } from '../customers/customersApi';


export const OrderEditorStore = types
    .model("OrderEditorStore", {
        order: types.optional(Order, () => Order.create({})),
        inventoryItems: types.array(InventoryItem),
        customers: types.array(Customer)
    })
    .actions((self) => ({
        load: flow(function* () {
            self.inventoryItems = yield getInventoryItems();
            self.customers = yield getCustomers();
        }),

        save: flow(function* () {
            if (self.order) {
                self.order = yield saveOrder(self.order);
            }
        })
    }));
    