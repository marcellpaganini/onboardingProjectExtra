import { html } from 'lit';
import { handlePropChange } from '../common/formTools';
import { IInventoryItem } from '../inventory/InventoryItem';
import { IOrder } from './Order';
import { IOrderItem } from './OrderItem';

const priceToCurrency = (price: number | undefined) =>
    price?.toLocaleString("en-CA", { style: "currency", currency: "CAD" }) ?? "";

const orderItemEditor = (
    order: IOrder,
    orderItem: IOrderItem,
    inventoryItems: IInventoryItem[]
) =>
    html`
    <tr>
        <td>
            <select .value=${orderItem.inventoryItemId?.id ?? ""} @change=${handlePropChange(orderItem, (orderItem, itemId) => {
                //This is slightly more complex than it needs to be because the inventoryItems collection isn't a map.
                const matchingItem = inventoryItems.find(i => i.id === itemId);
                orderItem.setInventoryItem(matchingItem);
            })}>
                <option value="">--Choose a Product--</option>
                ${inventoryItems.map((item) => 
                    html`
                    <option value=${item.id}>${item.name}</option>
                    `
                )}
            </select>
        </td>
        <td>
            <input type="number" min="1" .value=${orderItem.quantity.toString()} @change=${handlePropChange(orderItem, (item, val)=>
            item.setQuantity(Number(val) ?? 1))}
            required />
        </td>
        <td>
            ${priceToCurrency(orderItem.unitPrice)}
        </td>
        <td>
            ${priceToCurrency(orderItem.totalPrice)}
        </td>
        <td><button type="button" @click=${() => order.removeItem(orderItem)} id="">❌</button></td>
    </tr>
    `

export const orderItemsEditor = (
    order: IOrder,
    items: IInventoryItem[]
) =>
    html`
    <button type="button" @click=${()=> order.addItem()}>Add Item</button>
    
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price(per item)</th>
                <th>Price(total)</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            ${order.items.map((orderItem) => orderItemEditor(order, orderItem, items))}
            <tr>
                <td colspan=4 style="color: blue;">
                    <strong>Total:</strong> ${priceToCurrency(order.totalPrice)}</td>
            </tr>
            <tr>
                <td colspan=4 id="msg" style="height:15px ;font-size: 13px; color: red;"></td>
            </tr>
        </tbody>
    </table>
    `;
    