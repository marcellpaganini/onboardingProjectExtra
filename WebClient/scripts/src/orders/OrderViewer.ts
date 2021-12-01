import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { OrderViewerStore } from './orderViewerStore';
import { IOrder } from './Order';
import { button, table } from '../common/componentStyle';
import { helperFunctions } from '../common/formTools';


const orderViewer = (
    order: IOrder
) =>
    html`
    <label>
        <p><strong>Customer Name</strong></p>
        <p>${order.customerId?.fullName}</p>
    </label>
    
    <label>
        <p><strong>Delivery Address</strong></p>
        <p>${order.customerId?.fullAddress}</p>
    </label>

    <label>
        <p><strong>Phone Number</strong></p>
        <p>${order.customerId?.phoneNumber}</p>
    </label>

    <label>
        <p><strong>Email Address</strong></p>
        <p>${order.customerId?.emailAddress}</p>
    </label>

    <label>
        <p><strong>Date</strong></p>
        <p>${order.orderDate.substring(0, order.orderDate.indexOf("T"))}</p>
    </label>

    <label>
        <p><strong>Status</strong></p>
        <p>${helperFunctions.getStatus(order.status)}</p>
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
                        ${helperFunctions.priceToCurrency(item.buyPricePerUnit)}
                    </td>
                    <td>
                        ${helperFunctions.decimalToPercentage(item.tax)}
                    </td>
                    <td>
                        ${helperFunctions.priceToCurrency(item.totalPriceOnDate)}
                    </td>
                </tr>
                `)}
            <tr>
                <td colspan=4 style="color: blue;">
                    <strong>Total:</strong> ${helperFunctions.priceToCurrency(order.totalPrice)}</td>
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