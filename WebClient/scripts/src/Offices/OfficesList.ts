import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { OfficesListStore } from './OfficesListStore';
import { IOffice } from './Office';
import { table, button } from '../common/componentStyle';


const officesRow = ({ id, city, phone, address, state, 
                        postalCode, country }: IOffice) =>
    html`
    <tr>
        <td>${address}</td>
        <td>${city}</td>
        <td>${state}</td>
        <td>${postalCode}</td>
        <td>${country}</td>
        <td>${phone}</td>
        <td>
            <a href="${AppBasePath}/Offices/Edit/${id}">Edit</a>
        </td>
    </tr>
    `;

const officesTable = (offices: IOffice[] = []) =>
    html`
    <table class="long">
        <thead>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Postal Code</th>
            <th>Country</th>
            <th>Phone Number</th>
            <th></th>
        </thead>
    
        <tbody>
            ${offices.map(officesRow)}
        </tbody>
    </table>
    <br /><br />
    `;

@customElement('offices-list')
export class OfficesList extends MobxLitElement {
    static styles = css`
        ${table}
        ${button}
    `;

    store = OfficesListStore.create();

    firstUpdated = async () => {
        this.store.load();
    }

    render = () =>
        (this.store.offices)
            ? officesTable(this.store.offices)
            : 'Loading...';
}