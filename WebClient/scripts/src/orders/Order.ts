import { Instance, types } from 'mobx-state-tree';
import { postProcessor } from '../common/recordPostProcessor';
import { IOrderItem, OrderItem } from './OrderItem';

export const BaseOrder = types
    .model("Order", {
        id: types.optional(types.identifier, ""),
        customerName: types.optional(types.string, ""),
        deliveryAddress: types.optional(types.string, ""),
        items: types.array(OrderItem)
    })
    .actions(self => ({
        setCustomerName(customerName: string) {
            self.customerName = customerName;
        },

        setDeliveryAddress(deliveryAddress: string) {
            self.deliveryAddress = deliveryAddress;
        },

        addItem() {
            self.items.push(OrderItem.create({}));
        },

        removeItem(item: IOrderItem) {
            self.items.remove(item);
        }

    }))
    .views(self => ({
        get totalPrice() {
            return self.items.reduce<number | undefined>(
                (total, item) =>
                    (total === undefined)
                        ? undefined
                        : (item?.totalPrice === undefined)
                            ? total
                            : total + item.totalPrice,
                0
            );
        }
    }));

export const Order = types.snapshotProcessor(BaseOrder, { postProcessor })

export type IOrder = Instance<typeof Order>
