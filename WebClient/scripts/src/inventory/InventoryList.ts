import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { InventoryListStore } from './InventoryListStore';
import { IInventoryItem } from './InventoryItem';
import { table, button } from '../common/componentStyle';
import { helperFunctions } from '../common/formTools';


const inventoryRow = ({ id, categoryId, name, price, image }: IInventoryItem) =>
    html`
    <tr>
        <td><img src="${image}" width="50" height="50"></td>
        <td>${categoryId?.name}</td>
        <td>${name}</td>
        <td>${helperFunctions.priceToCurrency(price)}</td>
        <td>
            <a href="${AppBasePath}/Inventory/Edit/${id}">Edit</a>
        </td>
    </tr>
    `;

const inventoryTable = (items: IInventoryItem[] = []) =>
    html`
    <div style='overflow-x: auto;'>
        <table>
            <thead>
                <th>Item</th>
                <th>Category</th>
                <th>Name</th>
                <th>Price</th>
                <th></th>
            </thead>
        
            <tbody>
                ${items.map(inventoryRow)}
            </tbody>
        </table>
    </div>
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