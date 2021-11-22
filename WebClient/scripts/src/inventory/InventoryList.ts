import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { InventoryListStore } from './InventoryListStore';
import { IInventoryItem } from './InventoryItem';
import { table, button } from '../common/componentStyle';

const inventoryRow = ({ id, name, price }: IInventoryItem) =>
    html`
    <tr>
        <td>${name}</td>
        <td>${price}</td>
        <td>
            <a href="${AppBasePath}/Inventory/Edit/${id}">Edit</a>
        </td>
    </tr>
    `;

const inventoryTable = (items: IInventoryItem[] = []) =>
    html`
    <table>
        <thead>
            <th>Name</th>
            <th>Price</th>
            <th></th>
        </thead>
    
        <tbody>
            ${items.map(inventoryRow)}
        </tbody>
    </table>
    <br /><br />
    `;

@customElement('inventory-list')
export class InventoryList extends MobxLitElement {
    static styles = css`
        ${table}
        ${button}
    `;

    store = InventoryListStore.create();

    firstUpdated = async () => {
        this.store.load();
    }

    render = () =>
        (this.store.items)
            ? inventoryTable(this.store.items)
            : 'Loading...';
}