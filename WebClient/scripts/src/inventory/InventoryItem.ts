import { flow, Instance, SnapshotOut, types } from 'mobx-state-tree';
import { postProcessor } from '../common/recordPostProcessor';
import { Category, ICategory } from '../categories/Category';

const BaseInventoryItem = types
    .model("InventoryItem", {
        id: types.optional(types.identifier, ""),
        categoryId: types.maybe(types.reference(Category)),
        name: types.string,
        price: types.number,
        image: types.optional(types.string, "")
    })
    .actions(self => ({
        setCategory(category: ICategory | undefined) {
            self.categoryId = category;
        },

        setName(name: string) {
            self.name = name;
        },

        setPrice(price: number) {
            self.price = price;
        },

        setImage(image: string) {
            self.image = image;
        }
    }));

    const postProcessSnapshot = (snapshot: SnapshotOut<typeof BaseInventoryItem>) =>
    ({
        ...snapshot,
        id: snapshot.id || undefined,
        categoryId: snapshot.categoryId
    });

export const InventoryItem = types.snapshotProcessor(BaseInventoryItem, { postProcessor: postProcessSnapshot })

export type IInventoryItem = Instance<typeof InventoryItem>