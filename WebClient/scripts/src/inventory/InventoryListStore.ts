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
    }))
    .views((self) => ({
        get orderedCategories(): any {
            const view = self.items?.sort((a, b) => {
            var catA = a.categoryId?.name.toUpperCase();
            var catB = b.categoryId?.name.toUpperCase();
            if (catA! < catB!) {
                return -1;
            }
            if (catA! > catB!) {
                return 1;
            }
            return 0;
            })
            return view;
        }
    }));