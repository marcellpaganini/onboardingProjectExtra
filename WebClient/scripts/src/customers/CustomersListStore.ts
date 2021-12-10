import { flow, types } from 'mobx-state-tree';
import { getCustomers } from './customersApi';
import { Customer } from './Customer';
import { BaseModel } from '../BaseModel';


export const CustomersListStore = types
    .model("CustomersListStore", {
        paginatedCustomers: types.maybeNull(BaseModel(Customer)),
        customer: types.maybe(Customer)
    })
    .actions((self) => ({
        load: flow(function* () {
            self.paginatedCustomers = yield getCustomers();
        })
    }))
    .views(self => ({
        get fullName() {
            return `${self.customer?.firstName} ${self.customer?.lastName}`;
        },

        get customers() {
            return self.paginatedCustomers?.data;
        }
    }));
