import { MobxLitElement } from '@adobe/lit-mobx';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { handlePropChange, handleSubmit } from '../common/formTools';
import { InventoryEditorStore } from './InventoryEditorStore';
import { IInventoryItem } from './InventoryItem';

const itemEditor = (item: IInventoryItem, onSave: () => {}, onDelete: () => {}) =>
    html`
    <form @submit=${handleSubmit(() => onSave())}>
        <label>
            <p>Name</p>
            <input type="text" .value=${item.name} @change=${handlePropChange(item, (item, val) => item.setName(val))}
            required />
        </label>
    
        <label>
            <p>Price</p>
            <input type="number" step="0.01" min="0.01" .value=${item.price.toString()} @change=${handlePropChange(item, (item, val) =>
            item.setPrice(Number(val) ?? 0.01))}
            required />
        </label>
        <button>Submit</button> <button type="button" @click=${onDelete} >Delete</button>
    
    </form>
    `;

@customElement('inventory-editor')
export class InventoryEditor extends MobxLitElement {
    @property({ attribute: "item-id" })
    itemId: string = "";

    store = InventoryEditorStore.create();

    firstUpdated = async () => {
        await this.store.load(this.itemId);
    }

    saveItem = async () => {
        await this.store.save();
        alert('Item saved successfully.');
    }

    deleteItem = async () => {
        await this.store.delete();
        confirm('Are you sure?.');
    }

    render = () =>
        (this.store.item)
            ? itemEditor(this.store.item, this.saveItem, this.deleteItem)
            : 'Now loading...';
}