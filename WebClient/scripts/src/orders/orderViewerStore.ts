import { flow, types } from 'mobx-state-tree';
import { getOrder } from './ordersApi';
import { Order } from './Order';
import { InventoryItem } from '../inventory/InventoryItem';
import { Customer } from '../customers/Customer';
import { getInventoryItems } from '../inventory/inventoryApi';
import { getOrderCustomers } from '../customers/customersApi';

export const OrderViewerStore = types
    .model("OrderViwerStore", {
        order: types.maybe(Order),
        inventoryItems: types.array(InventoryItem),
        customers: types.array(Customer)
    })
    .actions((self) => ({
        load: flow(function* (id?: string) {
            self.inventoryItems = yield getInventoryItems();
            self.customers = yield getOrderCustomers();
            
            if (!id) {
                return;
            }
            const order = yield getOrder(id);
            self.order = order;
        })
    }));