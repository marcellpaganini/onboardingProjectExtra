import { Instance, types } from 'mobx-state-tree';
import { postProcessor } from '../common/recordPostProcessor';
import { IOrderItem, OrderItem } from './OrderItem';

export const BaseOrder = types
    .model("Order", {
        id: types.optional(types.identifier, ""),
        customerName: types.optional(types.string, ""),
        deliveryAddress: types.optional(types.string, ""),
        phoneNumber: types.optional(types.refinement(types.string, p => /^$|(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/g.test(p)), ""),
        emailAddress: types.optional(types.refinement(types.string, e => /^$|\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(e)), ""),
        orderDate: types.optional(types.string, ""),
        items: types.array(OrderItem)
    })
    .actions(self => ({
        setCustomerName(customerName: string) {
            self.customerName = customerName;
        },

        setDeliveryAddress(deliveryAddress: string) {
            self.deliveryAddress = deliveryAddress;
        },

        setPhoneNumber(phoneNumber: string) {
            self.phoneNumber = phoneNumber;
        },

        setEmailAddress(emailAddress: string) {
            self.emailAddress = emailAddress;
        },

        setOrderDate(orderDate: string) {
            self.orderDate = orderDate;
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

export const Order = types.snapshotProcessor(BaseOrder, { postProcessor })

export type IOrder = Instance<typeof Order>
