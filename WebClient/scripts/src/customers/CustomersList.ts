import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CustomersListStore } from './CustomersListStore';
import { ICustomer } from './Customer';
import { table, button } from '../common/componentStyle';
import { IBaseModel } from '../BaseModel';


const customersRow = ({ id, firstName, lastName, deliveryAddress, city, state, 
                        postalCode, country, emailAddress, phoneNumber }: ICustomer) =>
    html`
    <tr>
        <td>${firstName} ${lastName}</td>
        <td>${deliveryAddress}</td>
        <td>${city}</td>
        <td>${state}</td>
        <td>${postalCode}</td>
        <td>${country}</td>
        <td>${emailAddress}</td>
        <td>${phoneNumber}</td>
        <td>
            <a href="${AppBasePath}/Customers/Edit/${id}">Edit</a>
        </td>
    </tr>
    `;

const customersTable = (customers: IBaseModel, onReload: (pagination?: string) => any) =>
    html`
    <table class="long">
        <thead>
            <th>Full Name</th>
            <th>Delivery Address</th>
            <th>City</th>
            <th>State</th>
            <th>Postal Code</th>
            <th>Country</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th></th>
        </thead>
    
        <tbody>
            ${customers.data.map(customersRow)}
        </tbody>
    </table>
    <button type="button" class="btnPagination" @click=${() => onReload(customers.firstPage!.substring(customers.firstPage!.indexOf("?")))}>⏮</button>
    <button type="button" class="btnPagination" @click=${() => onReload(customers.previousPage!.substring(customers.previousPage!.indexOf("?")))}>⏪</button>
    <button type="button" class="btnPagination" @click=${() => onReload(customers.nextPage!.substring(customers.nextPage!.indexOf("?")))}>⏩</button>
    <button type="button" class="btnPagination" @click=${() => onReload(customers.lastPage!.substring(customers.lastPage!.indexOf("?")))}>⏭</button> 
    <br /><br />
    `;

@customElement('customers-list')
export class CustomersList extends MobxLitElement {
    static styles = css`
        ${table}
        ${button}
    `;

    store = CustomersListStore.create();

    firstUpdated = async () => {
        this.store.load();
    }

    reload = async (pagination?: string) => {
        this.store.load(pagination);
    }

    render = () =>
        (this.store.paginatedCustomers)
            ? customersTable(this.store.paginatedCustomers, this.reload)
            : 'Loading...';
}