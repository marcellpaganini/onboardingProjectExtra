import { flow, types } from 'mobx-state-tree';
import { deleteCustomer, getCustomer, saveCustomer } from './customersApi';
import { Customer } from './Customer';

const defaultCustomer = {
    firstName: "",
    lastName: "",
    deliveryAddress: "",
    city: "",
    state: "New Brunswick",
    postalCode: "",
    country: "",
    emailAddress: "",
    phoneNumber: ""
};

export const CustomerEditorStore = types
    .model("CustomerEditorStore", {
        customer: types.maybe(Customer)
    })
    .actions((self) => ({
        load: flow(function* (id?: string) {
            if (!id) {
                self.customer = Customer.create(defaultCustomer);
                return;
            }

            const customer = yield getCustomer(id);

            self.customer = customer;
        }),

        save: flow(function* () {
            if (self.customer) {
                self.customer = yield saveCustomer(self.customer);
            }
        }),

        delete: flow(function* () {
            if (Customer) {
                self.customer = yield deleteCustomer(self.customer!);
            }
        })
    }));
