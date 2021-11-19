import { html } from 'lit';
import { handlePropChange } from '../common/formTools';
import { IOrder } from './Order';

export const orderDetailsEditor = (
    order: IOrder
) =>
    html`
    <label>
        <p>Customer Name</p>
        <input type="text" .value=${order.customerName} @change=${handlePropChange(order, (order, val) =>
        order.setCustomerName(val))}
        required />
    </label>
    
    <label>
        <p>Delivery Address</p>
        <textarea rows="2" cols="40" .value=${order.deliveryAddress} @change=${handlePropChange(order, (order, val) => order.setDeliveryAddress(val))}
                required></textarea>
    </label>
    `;
