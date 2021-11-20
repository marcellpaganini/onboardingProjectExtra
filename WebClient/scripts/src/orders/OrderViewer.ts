import { MobxLitElement } from '@adobe/lit-mobx';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { OrderViewerStore } from './orderViewerStore';
import { IOrder } from './Order';


const priceToCurrency = (price: number | undefined) =>
    price?.toLocaleString("en-CA", { style: "currency", currency: "CAD" }) ?? "";

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
	
    <br />

    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price(per item)</th>
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
                        ${priceToCurrency(item.unitPrice)}
                    </td>
                    <td>
                        ${priceToCurrency(item.totalPrice)}
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