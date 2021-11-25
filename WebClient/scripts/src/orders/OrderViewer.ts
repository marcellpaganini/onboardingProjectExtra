import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { OrderViewerStore } from './orderViewerStore';
import { IOrder } from './Order';
import { button, table } from '../common/componentStyle';
import { priceToCurrency, decimalToPercentage } from '../common/formTools';


const orderViewer = (
    order: IOrder
) =>
    html`
    <label>
        <p><strong>Customer Name</strong></p>
        <p>${order.customerName}</p>
    </label>
    
    <label>
        <p><strong>Delivery Address</strong></p>
        <p>${order.deliveryAddress}</p>
    </label>

    <label>
        <p><strong>Phone Number</strong></p>
        <p>${order.phoneNumber}</p>
    </label>

    <label>
        <p><strong>Email Address</strong></p>
        <p>${order.emailAddress}</p>
    </label>

    <label>
        <p><strong>Date</strong></p>
        <p>${order.orderDate.substring(0, order.orderDate.indexOf("T"))}</p>
    </label>
	
    <br />

    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price(per item)</th>
                <th>Tax</th>
                <th>Price(total)</th>
            </tr>
        </thead>
        <tbody>
            ${order.items.map((item) => 
                html`
                <tr>
                    <td>
                        ${item.inventoryItemId?.name}
                    </td>
                    <td>
                        ${item.quantity.toString()}
                    </td>
                    <td>
                        ${priceToCurrency(item.buyPricePerUnit)}
                    </td>
                    <td>
                        ${decimalToPercentage(item.tax)}
                    </td>
                    <td>
                        ${priceToCurrency(item.totalPriceOnDate)}
                    </td>
                </tr>
                `)}
            <tr>
                <td colspan=4 style="color: blue;">
                    <strong>Total:</strong> ${priceToCurrency(order.totalPrice)}</td>
            </tr>
        </tbody>
    </table>
    `;

@customElement('order-viewer')
export class OrderViewer extends MobxLitElement {
    static styles = css`
        ${table}
        ${button}
    `;

    @property({ attribute: "order-id" })
    orderId: string = "";

    store = OrderViewerStore.create();

    firstUpdated = async () => {
        await this.store.load(this.orderId);
    }

    render = () =>
        (this.store.order)
            ? orderViewer(this.store.order)
            : 'Now loading...';
}