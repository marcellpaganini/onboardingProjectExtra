import { flow, types } from 'mobx-state-tree';
import { deleteCategory, getCategory, saveCategory } from './categoriesApi';
import { Category } from './Category';

const defaultCategory = {
    name: "",
    image: ""
};

export const CategoryEditorStore = types
    .model("CategoryEditorStore", {
        category: types.maybe(Category)
    })
    .actions((self) => ({
        load: flow(function* (id?: string) {
            if (!id) {
                self.category = Category.create(defaultCategory);
                return;
            }

            const category = yield getCategory(id);

            self.category = category;
        }),

        save: flow(function* () {
            if (self.category) {
                self.category = yield saveCategory(self.category);
            }
        }),

        delete: flow(function* () {
            if (Category) {
                self.category = yield deleteCategory(self.category!);
            }
        })
    }));
