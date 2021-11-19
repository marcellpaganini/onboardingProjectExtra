import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { IInventoryItem, InventoryItem } from '../inventory/InventoryItem';


export const BaseOrderItem = types
    .model("OrderItem", {
        id: types.optional(types.identifier, ""),
        inventoryItemId: types.maybe(types.reference(InventoryItem)),
        quantity: types.optional(types.number, 1)
    })
    .actions(self => ({
        setInventoryItem(inventoryItem: IInventoryItem | undefined) {
            self.inventoryItemId = inventoryItem;
        },

        setQuantity(quantity: number) {
            self.quantity = quantity;
        },

    }))
    .views(self => ({
        get unitPrice() {
            return self.inventoryItemId?.price;
        },

        get totalPrice() {
            if (
                self.inventoryItemId === undefined ||
                self.quantity < 1
            ) {
                return undefined;
            }

            return self.inventoryItemId.price * self.quantity;
        }
    }));

    const postProcessSnapshot = (snapshot: SnapshotOut<typeof BaseOrderItem>) =>
    ({
        ...snapshot,
        id: snapshot.id || undefined,
        inventoryItemId: snapshot.inventoryItemId
    });
    

export const OrderItem = types.snapshotProcessor(BaseOrderItem, { postProcessor: postProcessSnapshot})
export type IOrderItem = Instance<typeof OrderItem>
