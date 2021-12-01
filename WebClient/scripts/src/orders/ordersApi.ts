import { getSnapshot, SnapshotIn } from 'mobx-state-tree';
import { getRandomStatus } from '../common/formTools';
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

    order.status = getRandomStatus();

    // order.customer = order.customer;
    // delete order.customer;

    const response = await fetch(`${AppBasePath}/api/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(getSnapshot(order))
    });
    return Order.create(await response.json());
};
