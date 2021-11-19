import { Instance, types } from 'mobx-state-tree';
import { postProcessor } from '../common/recordPostProcessor';

const BaseInventoryItem = types
    .model("InventoryItem", {
        id: types.optional(types.identifier, ""),
        name: types.string,
        price: types.number
    })
    .actions(self => ({
        setName(name: string) {
            self.name = name;
        },

        setPrice(price: number) {
            self.price = price;
        }
    }));

export const InventoryItem = types.snapshotProcessor(BaseInventoryItem, { postProcessor })

export type IInventoryItem = Instance<typeof InventoryItem>