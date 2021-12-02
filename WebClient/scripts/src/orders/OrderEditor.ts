import { css, html } from 'lit';
import { MobxLitElement } from '@adobe/lit-mobx';
import { customElement, property } from 'lit/decorators.js';
import { handleSubmit } from '../common/formTools';
import { IOrder } from './Order';
import { IInventoryItem } from '../inventory/InventoryItem';
import { OrderEditorStore } from './OrderEditorStore';
import { orderDetailsEditor } from './orderDetailsEditor';
import { orderItemsEditor } from './orderItemEditor';
import { button, input } from '../common/componentStyle';
import { ICustomer } from '../customers/Customer';

const orderEditor = (
    order: IOrder,
    customers: ICustomer[],
    items: IInventoryItem[],
    onSave: () => any,
    onDelete: () => {}
) =>
    html`
    <form @submit=${handleSubmit(() => onSave())}>
        ${orderDetailsEditor(order, customers)}
    
        <br /><br />
    
        ${orderItemsEditor(order, items)}
    
        <br /><br />

        <button>Submit</button> <button type="button" @click=${onDelete} >Delete</button>
    </form>
        `;


@customElement('order-editor')
export class OrderEditor extends MobxLitElement {
    static styles = css`
        ${button}
        ${input}
    `;

    @property({ attribute: "order-id" })
    orderId: string = "";

    store = OrderEditorStore.create();

    firstUpdated = async () => {
        await this.store.load(this.orderId);
    }

    saveOrder = async () => {
        if (this.store.order.items.length === 0){
            alert('There are no items in this order.');
            return;
        } else if ((!this.store.order.customerId?.emailAddress || !this.store.order.customerId?.phoneNumber ||
                    !this.store.order.customerId?.postalCode)){ 
            alert('Please add a valid email/phone number/postal code.');
            return;
        } else if (this.store.order.items.some(item => item.inventoryItemId === undefined)){ 
            alert('Please select a product for the added item.');
            return;
        }

        var redirect: string = "";
        this.orderId === "" ? redirect = `.` : redirect = `..`;
        
        await this.store.save();
        alert('Order saved successfully.');
        location.assign(`${redirect}/view/${this.store.order.id}`);
    
    }

    deleteOrder = async () => {
        await this.store.delete();
        confirm('Are you sure?.');
        location.assign('../../');
        alert('Item deleted successfully.');
    }

    public render() {
        return (this.store.inventoryItems)
            ? orderEditor(this.store.order, this.store.customers, this.store.inventoryItems, this.saveOrder, this.deleteOrder)
            : html`Now loading...`;
    }
}
