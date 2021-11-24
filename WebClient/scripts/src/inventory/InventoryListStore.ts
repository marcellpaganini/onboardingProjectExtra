import { flow, types } from 'mobx-state-tree';
import { getInventoryItems } from './inventoryApi';
import { InventoryItem } from './InventoryItem';

export const InventoryListStore = types
    .model("InventoryListStore", {
        items: types.maybe(types.array(InventoryItem)),
        item: types.maybe(InventoryItem)
    })
    .actions((self) => ({
        load: flow(function* () {
            self.items = yield getInventoryItems();
        })
    }));