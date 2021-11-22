import { css, html } from 'lit';
import { MobxLitElement } from '@adobe/lit-mobx';
import { customElement } from 'lit/decorators.js';
import { handleSubmit } from '../common/formTools';
import { IOrder } from './Order';
import { IInventoryItem } from '../inventory/InventoryItem';
import { OrderEditorStore } from './OrderEditorStore';
import { orderDetailsEditor } from './orderDetailsEditor';
import { orderItemsEditor } from './orderItemEditor';
import { button } from '../common/componentStyle';

const orderEditor = (
    order: IOrder,
    items: IInventoryItem[],
    onSave: () => any,
) =>
    html`
    <form @submit=${handleSubmit(() => onSave())}>
        ${orderDetailsEditor(order)}
    
        <br /><br />
    
        ${orderItemsEditor(order, items)}
    
        <br /><br />

        <button>Submit</button>
    </form>
        `;


@customElement('order-editor')
export class OrderEditor extends MobxLitElement {
    static styles = css`
        ${button}
    `;

    store = OrderEditorStore.create();

    firstUpdated = async () => {
        await this.store.load();
    }

    saveOrder = async () => {
        if (this.store.order.items.length === 0){
            alert('There are no items in this order.');
            return;
        } else if ((!this.store.order.emailAddress)){ 
            alert('Please add a valid email address.');
            return;
        } else if ((!this.store.order.phoneNumber)){ 
            alert('Please add a valid phone number.');
            return;
        } else if (this.store.order.items.some(item => item.inventoryItemId === undefined)){ 
            alert('Please select a product for the added item.');
            return;
        }

        await this.store.save();
        alert('Order saved successfully.');
        
        location.assign(`./view/${this.store.order.id}`);
    }

    public render() {
        return (this.store.inventoryItems)
            ? orderEditor(this.store.order, this.store.inventoryItems, this.saveOrder)
            : html`Now loading...`;
    }
}