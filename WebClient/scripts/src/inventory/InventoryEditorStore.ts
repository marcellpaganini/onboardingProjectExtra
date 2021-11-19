import { flow, types } from 'mobx-state-tree';
import { deleteInventoryItem, getInventoryItem, saveInventoryItem } from './inventoryApi';
import { InventoryItem } from './InventoryItem';

const defaultInventoryItem = {
    name: "",
    price: 0.00
};

export const InventoryEditorStore = types
    .model("InventoryEditorStore", {
        item: types.maybe(InventoryItem)
    })
    .actions((self) => ({
        load: flow(function* (id?: string) {
            if (!id) {
                self.item = InventoryItem.create(defaultInventoryItem);
                return;
            }

            const item = yield getInventoryItem(id);

            self.item = item;
        }),

        save: flow(function* () {
            if (self.item) {
                self.item = yield saveInventoryItem(self.item);
            }
        }),

        delete: flow(function* () {
            if (InventoryItem) {
                self.item = yield deleteInventoryItem(self.item!);
            }
        })
    }));
