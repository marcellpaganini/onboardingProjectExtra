import { flow, types } from 'mobx-state-tree';
import { saveOrder } from './ordersApi';
import { Order } from './Order';
import { InventoryItem } from '../inventory/InventoryItem';
import { getInventoryItems } from '../inventory/inventoryApi';

export const OrderEditorStore = types
    .model("OrderEditorStore", {
        order: types.optional(Order, () => Order.create({})),
        inventoryItems: types.array(InventoryItem)
    })
    .actions((self) => ({
        load: flow(function* () {
            self.inventoryItems = yield getInventoryItems();
        }),

        save: flow(function* () {
            if (self.order) {
                self.order = yield saveOrder(self.order);
            }
        })
    }));
    