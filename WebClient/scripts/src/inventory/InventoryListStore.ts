import { flow, Instance, types } from 'mobx-state-tree';
import { getCategories } from '../categories/categoriesApi';
import { Category } from '../categories/Category';
import { getInventoryItems } from './inventoryApi';
import { InventoryItem } from './InventoryItem';

export const InventoryListStore = types
    .model("InventoryListStore", {
        items: types.maybe(types.array(InventoryItem)),
        item: types.maybe(InventoryItem),
        categories: types.maybe(types.array(Category)),
        categoryCheck: false,
        priceCheck: false,
        nameCheck: false
    })
    .actions((self) => ({
        load: flow(function* () {
            self.categories = yield getCategories(); 
            self.items = yield getInventoryItems();
        }),

        setCategoryCheck() {
            self.categoryCheck = !self.categoryCheck
        },

        setPriceCheck() {
            self.priceCheck = !self.priceCheck;
        },

        setNameCheck() {
            self.nameCheck = !self.nameCheck;
        }
    }))
    .views((self) => ({
        get orderedCategories(): any {
            if (self.categoryCheck) {
                const view = self.items?.slice().sort((a, b) => {
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
        }
    }));

    export type IInventoryListStore = Instance<typeof InventoryListStore>