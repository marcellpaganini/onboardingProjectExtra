import { flow, types } from 'mobx-state-tree';
import { getCategories } from '../categories/categoriesApi';
import { Category } from '../categories/Category';
import { deleteInventoryItem, getInventoryItem, saveInventoryItem } from './inventoryApi';
import { InventoryItem } from './InventoryItem';

const defaultInventoryItem = {
    name: "",
    categoryId: "",
    price: 0.00,
    image: ""
};

export const InventoryEditorStore = types
    .model("InventoryEditorStore", {
        item: types.maybe(InventoryItem),
        categories: types.array(Category)
    })
    .actions((self) => ({
        load: flow(function* (id?: string) {
            self.categories = yield getCategories();
            
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
