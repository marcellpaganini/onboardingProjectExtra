import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CustomersListStore } from './CustomersListStore';
import { ICustomer } from './Customer';
import { table, button } from '../common/componentStyle';


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

const customersTable = (customers: ICustomer[] = []) =>
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
            ${customers.map(customersRow)}
        </tbody>
    </table>
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

    render = () =>
        (this.store.customers)
            ? customersTable(this.store.customers)
            : 'Loading...';
}