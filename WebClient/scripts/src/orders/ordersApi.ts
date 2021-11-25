import { DateTime } from 'luxon';
import { getSnapshot, SnapshotIn } from 'mobx-state-tree';
import { IOrder, Order } from './Order';

export const getOrders = async () => {
    const response = await fetch(`${AppBasePath}/api/orders`);

    const results = await response.json();

    return results.map((i: SnapshotIn<IOrder>) => Order.create(i));
};

export const getOrder = async (id: string) => {
    const response = await fetch(`${AppBasePath}/api/orders/${id}`);

    return Order.create(await response.json());
};

export const saveOrder = async (order: IOrder) => {

    console.log(order);
    order.orderDate = DateTime.fromFormat(order.orderDate, 'MM-dd-yyyy').toUTC().toJSON()

    const response = await fetch(`${AppBasePath}/api/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(getSnapshot(order))
    });
    return Order.create(await response.json());
};
