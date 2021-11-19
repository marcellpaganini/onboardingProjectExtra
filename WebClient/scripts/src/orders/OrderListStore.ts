import { flow, types } from 'mobx-state-tree';
import { getOrders } from './ordersApi';
import { Order } from './Order';
import { InventoryItem } from '../inventory/InventoryItem';
import { getInventoryItems } from '../inventory/inventoryApi';

export const OrderListStore = types
    .model("OrderListStore", {
        orders: types.maybe(types.array(Order)),
        inventoryItems: types.array(InventoryItem)
    })
    .actions((self) => ({
        load: flow(function* () {
            self.inventoryItems = yield getInventoryItems();
            self.orders = yield getOrders();
        })
    }))
    .views(self => ({
        get sortedOrders() {
            return self.orders?.slice().sort( (a, b) => a.customerName.localeCompare(b.customerName, undefined, { caseFirst: 'upper' })) ?? [];
        }
    }));