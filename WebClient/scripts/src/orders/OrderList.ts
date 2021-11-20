import { MobxLitElement } from '@adobe/lit-mobx';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { OrderListStore } from './OrderListStore';
import { IOrder } from './Order';

const priceToCurrency = (price: number | undefined) =>
    price?.toLocaleString("en-CA", { style: "currency", currency: "CAD" }) ?? "";

const ordersRow = ({id, customerName, totalPrice}: IOrder) =>
    html`
    <tr>
        <td>${customerName}</td>
        <td>${priceToCurrency(totalPrice)}</td>
        <td>
            <a href="${AppBasePath}/orders/View/${id}">View</a>
        </td>
    </tr>
    `;

const ordersTable = (orders: IOrder[] = []) =>
    html`
    <table>
        <thead>
            <tr>
            <th>Customer Name</th>
            <th>Total</th>
            <th></th>
            </tr>
        </thead>
    
        <tbody>
            ${orders.map(ordersRow)}
        </tbody>
    </table> <br /><br />
    `;

@customElement('order-list')
export class OrderList extends MobxLitElement {
    store = OrderListStore.create();

    firstUpdated = async () => {
        await this.store.load();
    }

    render = () =>
        (this.store.orders)
            ? ordersTable(this.store.sortedOrders)
            : 'Loading...';
}