import { flow, types } from 'mobx-state-tree';
import { getCategories } from './categoriesApi';
import { Category } from './Category';

export const CategoriesListStore = types
    .model("CategoriesListStore", {
        categories: types.maybe(types.array(Category)),
        category: types.maybe(Category)
    })
    .actions((self) => ({
        load: flow(function* () {
            self.category = yield getCategories();
        })
    }));