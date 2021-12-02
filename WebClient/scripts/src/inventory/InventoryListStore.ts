import { flow, types } from 'mobx-state-tree';
import { getCategories } from '../categories/categoriesApi';
import { Category } from '../categories/Category';
import { getInventoryItems } from './inventoryApi';
import { InventoryItem } from './InventoryItem';

export const InventoryListStore = types
    .model("InventoryListStore", {
        items: types.maybe(types.array(InventoryItem)),
        item: types.maybe(InventoryItem),
        categories: types.maybe(types.array(Category))
    })
    .actions((self) => ({
        load: flow(function* () {
            self.categories = yield getCategories(); 
            self.items = yield getInventoryItems();
        })
    }));