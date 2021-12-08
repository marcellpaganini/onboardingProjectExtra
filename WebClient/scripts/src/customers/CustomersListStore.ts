import { flow, types } from 'mobx-state-tree';
import { getCustomers } from './customersApi';
import { Customer } from './Customer';
import { BaseModel } from '../BaseModel';

export const CustomersListStore = types
    .model("CustomersListStore", {
        customers: types.maybeNull(types.array(BaseModel(Customer))),
        customer: types.maybe(Customer)
    })
    .actions((self) => ({
        load: flow(function* () {
            self.customers = yield getCustomers();
        })
    }))
    .views(self => ({
        get fullName() {
            return `${self.customer?.firstName} ${self.customer?.lastName}`;
        }
    }));