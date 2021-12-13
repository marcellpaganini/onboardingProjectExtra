import { getSnapshot, SnapshotIn } from 'mobx-state-tree';
import { ICustomer, Customer } from './Customer';
import { IBaseModel, BaseModel } from '../BaseModel';
import { baseModelCustomer } from '../IBaseModel';

export const getCustomers = async () => {
    const response = await fetch(`${AppBasePath}/api/customers`);

    //return Customer.create(await response.json());
    return baseModelCustomer.create(await response.json());
};

export const getCustomer = async (id: string) => {
    const response = await fetch(`${AppBasePath}/api/customers/${id}`);

    return Customer.create(await response.json());
};

export const saveCustomer = async (customer: ICustomer) => {
    const response = await fetch(`${AppBasePath}/api/customers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(getSnapshot(customer))
    });

    return Customer.create(await response.json());
};

export const deleteCustomer = async (customer: ICustomer) => {
    const response = await fetch(`${AppBasePath}/api/customers`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(getSnapshot(customer))
    });

    return Customer.create(await response.json());
}
