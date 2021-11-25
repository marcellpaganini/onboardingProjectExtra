import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { OrderListStore } from './OrderListStore';
import { IOrder } from './Order';
import { table, button } from '../common/componentStyle';
import { priceToCurrency } from '../common/formTools';


const ordersRow = ({id, customerName, totalPrice, orderDate}: IOrder) =>
    html`
    <tr>
        <td>${customerName}</td>
        <td>${orderDate.substring(0, orderDate.indexOf("T"))}</td>
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
            <th>Date</th>
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
    static styles = css`
        ${table}
        ${button}
    `;

    store = OrderListStore.create();

    firstUpdated = async () => {
        await this.store.load();
    }

    render = () =>
        (this.store.orders)
            ? ordersTable(this.store.sortedOrders)
            : 'Loading...';
}