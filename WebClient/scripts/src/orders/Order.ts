import { DateTime } from 'luxon';
import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { Customer, ICustomer } from '../customers/Customer';
import { IOrderItem, OrderItem } from './OrderItem';


export const BaseOrder = types
    .model("Order", {
        id: types.optional(types.identifier, ""),
        customerId: types.maybe(types.reference(Customer)),
        orderDate: types.optional(types.string, DateTime.now().toUTC().toJSON()),
        status: types.optional(types.number, 1),
        items: types.array(OrderItem),
        customer: types.maybe(Customer)
    })
    .actions(self => ({
        setCustomer(customer: ICustomer | undefined) {
            self.customerId = customer;
        },

        setOrderDate(orderDate: string) {
            self.orderDate = orderDate;
        },

        setOrderStatus(orderStatus: number) {
            self.status = orderStatus;
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
                            : self.id === "" ? (item?.totalPrice === undefined)
                            ? total
                            : total + item.totalPrice :
                            (item?.totalPriceOnDate === undefined)
                            ? total
                            : total + item.totalPriceOnDate,
                0
            );
        }
    }));

    const postProcessSnapshot = (snapshot: SnapshotOut<typeof BaseOrder>) =>
    ({
        ...snapshot,
        id: snapshot.id || undefined,
        customerId: snapshot.customerId
    });

export const Order = types.snapshotProcessor(BaseOrder, { postProcessor: postProcessSnapshot })

export type IOrder = Instance<typeof Order>
