import { flow, Instance, types, cast } from 'mobx-state-tree';
import { Office } from '../offices/Office';
import { getOffices } from '../offices/officesApi';
import { getPaginatedEmployees } from './employeesApi';
import { Employee } from './Employee';
import { baseModelEmployee } from '../IBaseModel';

export const EmployeesListStore = types
    .model("EmployeesListStore", {
        paginatedEmployees: types.maybeNull(baseModelEmployee),
        employee: types.maybe(Employee),
        offices: types.maybe(types.array(Office)),
    })
    .actions((self) => ({
        load: flow(function* (pagination?: string) {
            self.offices = yield getOffices(); 
            self.paginatedEmployees = yield getPaginatedEmployees(pagination);
        })
    }))
    .views(self => ({
        get sortedEmployees() {
            return self.paginatedEmployees?.data.slice().sort( (a, b) => a.firstName.localeCompare(b.firstName, undefined, { caseFirst: 'upper' })) ?? [];
        }
    }));

    export type IEmployeeListStore = Instance<typeof EmployeesListStore>