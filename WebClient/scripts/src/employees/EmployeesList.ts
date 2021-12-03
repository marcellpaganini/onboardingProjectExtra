import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { EmployeesListStore } from './EmployeeListStore';
import { IEmployee } from './Employee';
import { table, button } from '../common/componentStyle';
import { helperFunctions } from '../common/formTools';


const employeesRow = ({ id, officeId, manager, firstName, lastName, emailAddress,
                        extension, jobTitle }: IEmployee) =>
    html`
    <tr>
        <td>${officeId?.city}</td>
        <td>${manager}</td>
        <td>${firstName} ${lastName}</td>
        <td>${emailAddress}</td>
        <td>${extension}</td>
        <td>${jobTitle}</td>
        <td>
            <a href="${AppBasePath}/Employees/Edit/${id}">Edit</a>
        </td>
    </tr>
    `;

const employeesTable = (employees: IEmployee[] = []) =>
    html`
    <table>
        <thead>
            <th>Office</th>
            <th>Manager</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Extension</th>
            <th>Job Title</th>
            <th></th>
        </thead>
    
        <tbody>
            ${employees.map(employeesRow)}
        </tbody>
    </table>
    <br /><br />
    `;

@customElement('employees-list')
export class EmployeesList extends MobxLitElement {
    static styles = css`
        ${table}
        ${button}
    `;

    store = EmployeesListStore.create();

    firstUpdated = async () => {
        this.store.load();
    }

    render = () =>
        (this.store.employees)
            ? employeesTable(this.store.employees)
            : 'Loading...';
}