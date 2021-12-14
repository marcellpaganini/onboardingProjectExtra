import { flow, types } from 'mobx-state-tree';
import { Office } from '../offices/Office';
import { getOffices } from '../offices/officesApi';
import { getPaginatedEmployees } from './employeesApi';
import { Employee } from './Employee';
import { baseModelEmployee } from '../IBaseModel';

export const EmployeesListStore = types
    .model("EmployeesListStore", {
        paginatedEmployees: types.maybeNull(baseModelEmployee),
        employee: types.maybe(Employee),
        offices: types.maybe(types.array(Office))
    })
    .actions((self) => ({
        load: flow(function* (pagination?: string) {
            self.offices = yield getOffices(); 
            self.paginatedEmployees = yield getPaginatedEmployees(pagination);
        })
    }));