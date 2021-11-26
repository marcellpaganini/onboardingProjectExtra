import { html } from 'lit';
import { DateTime } from 'luxon';
import { getRandomStatus, handlePropChange } from '../common/formTools';
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

    <label>
        <p>Phone Number</p>
        <input type="text" .value=${order.phoneNumber} @change=${handlePropChange(order, (order, val) => order.setPhoneNumber(val))}
                required></input>
    </label>

    <label>
        <p>Email Address</p>
        <input type="text" .value=${order.emailAddress!} @change=${handlePropChange(order, (order, val) => order.setEmailAddress(val))}
                required></input>
    </label>
        <input type="hidden" .value=${getRandomStatus().toString()} @change=${handlePropChange(order, (order, val) => order.setOrderStatus(Number(val)))}
                required>
        </input>
        <input type="hidden" .value=${DateTime.now().toUTC().toJSON()} @change=${handlePropChange(order, (order, val) => order.setOrderDate(val))}
                required>
        </input>
    `;
