import { flow, types } from 'mobx-state-tree';
import { Office } from '../offices/Office';
import { getOffices } from '../offices/officesApi';
import { getEmployees } from './employeesApi';
import { Employee } from './Employee';

export const EmployeesListStore = types
    .model("EmployeesListStore", {
        employees: types.maybe(types.array(Employee)),
        employee: types.maybe(Employee),
        offices: types.maybe(types.array(Office))
    })
    .actions((self) => ({
        load: flow(function* () {
            self.employees = yield getEmployees();
            self.offices = yield getOffices(); 
        })
    }));