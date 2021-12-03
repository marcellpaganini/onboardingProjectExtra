import { flow, types } from 'mobx-state-tree';
import { getOffices } from '../offices/officesApi';
import { Office } from '../offices/Office';
import { deleteEmployee, getEmployees, getEmployee, saveEmployee } from './employeesApi';
import { Employee } from './Employee';

const defaultEmployee = {
    officeId: "",
    manager: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    extension: "",
    jobTitle: ""
};

export const EmployeeEditorStore = types
    .model("EmployeeEditorStore", {
        employee: types.maybe(Employee),
        employees: types.maybe(types.array(Employee)),
        offices: types.array(Office)
        })
    .actions((self) => ({
        load: flow(function* (id?: string) {
            self.offices = yield getOffices();
            self.employees = yield getEmployees();
            
            if (!id) {
                self.employee = Employee.create(defaultEmployee);
                return;
            }
            const employee = yield getEmployee(id);

            self.employee = employee;
        }),

        save: flow(function* () {
            if (self.employee) {
                self.employee = yield saveEmployee(self.employee);
            }
        }),

        delete: flow(function* () {
            if (Employee) {
                self.employee = yield deleteEmployee(self.employee!);
            }
        })
    }))
    .views(self => ({
        get managers() {
            return self.employees?.filter(e => e.jobTitle === "Manager" || e.jobTitle === "CEO");
        }
    }));
