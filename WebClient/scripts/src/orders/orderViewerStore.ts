import { flow, types } from 'mobx-state-tree';
import { getOrder } from './ordersApi';
import { Order } from './Order';
import { InventoryItem } from '../inventory/InventoryItem';
import { getInventoryItems } from '../inventory/inventoryApi';

export const OrderViewerStore = types
    .model("OrderViwerStore", {
        order: types.maybe(Order),
        inventoryItems: types.array(InventoryItem)
    })
    .actions((self) => ({
        load: flow(function* (id?: string) {
            self.inventoryItems = yield getInventoryItems();
            
            if (!id) {
                return;
            }
            const order = yield getOrder(id);
            self.order = order;
        })
    }));