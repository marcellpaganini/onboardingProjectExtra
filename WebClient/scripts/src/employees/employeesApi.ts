import { getSnapshot, SnapshotIn } from 'mobx-state-tree';
import { IEmployee, Employee } from './Employee';

export const getEmployees = async () => {
    const response = await fetch(`${AppBasePath}/api/employees`);

    const results = await response.json();

    return results.map((i: SnapshotIn<IEmployee>) => Employee.create(i));
};

export const getEmployee = async (id: string) => {
    const response = await fetch(`${AppBasePath}/api/employees/${id}`);

    return Employee.create(await response.json());
};

export const saveEmployee = async (employee: IEmployee) => {
    const response = await fetch(`${AppBasePath}/api/employees`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(getSnapshot(employee))
    });

    return Employee.create(await response.json());
};

export const deleteEmployee = async (employee: IEmployee) => {
    const response = await fetch(`${AppBasePath}/api/employees`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(getSnapshot(employee))
    });

    return Employee.create(await response.json());
}
