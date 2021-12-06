import { flow, types } from 'mobx-state-tree';
import { deleteCustomer, getCustomer, saveCustomer } from './customersApi';
import { Customer } from './Customer';
import { Employee } from '../employees/Employee';
import { getEmployees } from '../employees/employeesApi';

const defaultCustomer = {
    firstName: "",
    lastName: "",
    deliveryAddress: "",
    city: "",
    state: "New Brunswick",
    postalCode: "",
    country: "Canada",
    emailAddress: "",
    phoneNumber: ""
};

export const CustomerEditorStore = types
    .model("CustomerEditorStore", {
        customer: types.maybe(Customer),
        employees: types.array(Employee)
    })
    .actions((self) => ({
        load: flow(function* (id?: string) {
            self.employees = yield getEmployees();

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
    }))
    .views(self => ({
        get salespeople() {
            return self.employees.filter(e => e.jobTitle === "Salesperson");
        }
    }));
