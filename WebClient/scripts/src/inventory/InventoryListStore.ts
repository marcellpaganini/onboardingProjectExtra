import { flow, Instance, types } from 'mobx-state-tree';
import { getCategories } from '../categories/categoriesApi';
import { Category } from '../categories/Category';
import { getInventoryItems } from './inventoryApi';
import { InventoryItem } from './InventoryItem';

const sort = {
	category: (v: string) => {},
	price: (v: string) => {},
    name: (v: string) => {}
}

export const objLit = typeof sort

export const InventoryListStore = types
    .model("InventoryListStore", {
        items: types.maybe(types.array(InventoryItem)),
        item: types.maybe(InventoryItem),
        categories: types.maybe(types.array(Category)),
        orderCheck: ""
    })
    .actions((self) => ({
        load: flow(function* () {
            self.categories = yield getCategories(); 
            self.items = yield getInventoryItems();
        }),

        setOrderCheck(check: string) {
            self.orderCheck = check
        }
    }))
    .views((self) => ({
        orderedList(value: string | undefined): any {
            if (value === 'category') {
                return self.items?.slice().sort( (a, b) => a.categoryId!.name.localeCompare(b.categoryId!.name, undefined, { caseFirst: 'upper' })) ?? [];
            } else if (value === 'price') {
                return self.items?.slice().sort( (a, b) => a.price - b.price)
            } else if (value === 'name') {
                return self.items?.slice().sort( (a, b) => a.name.localeCompare(b.name, undefined, {caseFirst: 'upper' })) ?? [];
            } else {
                if (value === undefined) {
                    return self.items;
                }
            }
        }
    }));

    export type IInventoryListStore = Instance<typeof InventoryListStore>