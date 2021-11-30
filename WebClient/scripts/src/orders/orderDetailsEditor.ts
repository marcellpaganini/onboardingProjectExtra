import { html } from 'lit';
import { DateTime } from 'luxon';
import { getRandomStatus, handlePropChange } from '../common/formTools';
import { ICustomer } from '../customers/Customer';
import { IOrder } from './Order';

export const orderDetailsEditor = (
    order: IOrder,
    customers: ICustomer[],
) =>
    html`
    <select .value=${order.customerId?.id ?? ""} @change=${handlePropChange(order, (order, customerId) => {
                //This is slightly more complex than it needs to be because the inventoryItems collection isn't a map.
                const matchingCustomer = customers.find(c => c.id === customerId);
                order.setCustomer(matchingCustomer);
            })} class="tableInput">
                <option value="">--Choose a Customer--</option>
                ${customers.map((customer) => 
                    html`
                    <option value=${customer.id}>${customer.fullName}</option>
                    `
                )}
    </select>
    
        <input type="hidden" .value=${getRandomStatus().toString()} @change=${handlePropChange(order, (order, val) => order.setOrderStatus(Number(val)))}
                required />
        <input type="hidden" .value=${DateTime.now().toUTC().toJSON()} @change=${handlePropChange(order, (order, val) => order.setOrderDate(val))}
                required />
    `;
