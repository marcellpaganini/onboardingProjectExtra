import { flow, IAnyType, types } from 'mobx-state-tree';
import { getCustomers } from './customersApi';
import { Customer } from './Customer';
import { baseModelCustomer } from '../IBaseModel';


export const CustomersListStore = types
    .model("CustomersListStore", {
        paginatedCustomers: types.maybeNull(baseModelCustomer),
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
