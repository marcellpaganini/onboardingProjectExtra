import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { EmployeesListStore, IEmployeeListStore } from './EmployeeListStore';
import { IEmployee } from './Employee';
import { table, button } from '../common/componentStyle';
import { IBaseModel } from '../BaseModel';


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

const employeesTable = (paginatedEmployees: IBaseModel, store: IEmployeeListStore, onReload: (pagination?: string) => any, 
                        onSort: (type?: string) => any) =>
    html`
    <table class="long">
        <thead>
            <th>Office</th>
            <th>Manager</th>
            <th><button type="button" class="btnTableHeader" @click=${() => onSort("name")}>Full Name</button></th>
            <th>Email Address</th>
            <th>Extension</th>
            <th>Job Title</th>
            <th></th>
        </thead>
    
        <tbody>
            ${store.sortedEmployees ? store.sortedEmployees.map(employeesRow) : paginatedEmployees.data.map(employeesRow)}
        </tbody>
    </table>
    <button type="button" class="btnPagination" @click=${() => onReload(paginatedEmployees.firstPage!.substring(paginatedEmployees.firstPage!.indexOf("?")))}>⏮</button>
    <button type="button" class="btnPagination" @click=${() => onReload(paginatedEmployees.previousPage!.substring(paginatedEmployees.previousPage!.indexOf("?")))}>⏪</button>
    <button type="button" class="btnPagination" @click=${() => onReload(paginatedEmployees.nextPage!.substring(paginatedEmployees.nextPage!.indexOf("?")))}>⏩</button>
    <button type="button" class="btnPagination" @click=${() => onReload(paginatedEmployees.lastPage!.substring(paginatedEmployees.lastPage!.indexOf("?")))}>⏭</button> 
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

    reload = async (pagination?: string) => {
        this.store.load(pagination);
    }

    sort = async (type?: string) => {
        if (type === "name") {
            return this.store.sortedEmployees;
        }
        return this.store.paginatedEmployees?.data;
    }

    render = () =>
        (this.store.paginatedEmployees)
            ? employeesTable(this.store.paginatedEmployees, this.store, this.reload, this.sort)
            : 'Loading...';
}