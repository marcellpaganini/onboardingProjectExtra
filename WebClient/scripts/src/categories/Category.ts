import { Instance, types } from 'mobx-state-tree';
import { postProcessor } from '../common/recordPostProcessor';

const BaseCategory = types
    .model("Category", {
        id: types.optional(types.identifier, ""),
        name: types.optional(types.string, ""),
        image: types.optional(types.string, "")
    })
    .actions(self => ({
        setName(name: string) {
            self.name = name;
        },

        setImage(image: string) {
            self.image = image;
        }
    }));

export const Category = types.snapshotProcessor(BaseCategory, { postProcessor })

export type ICategory = Instance<typeof Category>
