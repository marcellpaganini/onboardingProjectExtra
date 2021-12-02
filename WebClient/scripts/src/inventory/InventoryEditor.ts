import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ICategory } from '../categories/Category';
import { table, button, input } from '../common/componentStyle';
import { handlePropChange, handleSubmit } from '../common/formTools';
import { InventoryEditorStore } from './InventoryEditorStore';
import { IInventoryItem } from './InventoryItem';


const itemEditor = (item: IInventoryItem, categories: ICategory[], onSave: () => {}, onDelete: () => {}) =>
    html`
    <form @submit=${handleSubmit(() => onSave())}>
        <label>
            <p>Name</p>
            <input type="text" .value=${item.name} @change=${handlePropChange(item, (item, val) => item.setName(val))}
            required />
        </label>

        <select .value=${item.categoryId?.id ?? ""} @change=${handlePropChange(item, (item, categoryId) => {
                const matchingCategory = categories.find(c => c.id === categoryId);
                item.setCategory(matchingCategory);
            })} class="customer">
                <option value="">--Choose a Category--</option>
                ${categories.map((category) => 
                    html`
                    <option value=${category.id}>${category.name}</option>
                    `
                )}
    </select>
    
        <label>
            <p>Price</p>
            <input type="number" step="0.01" min="0.01" .value=${item.price.toString()} @change=${handlePropChange(item, (item, val) =>
            item.setPrice(Number(val) ?? 0.01))}
            required />
        </label>

        <label>
            <p>Image</p>
            <input type="text" .value=${item.image} @change=${handlePropChange(item, (item, val) => item.setImage(val))}
            required />
        </label>

        <br /> <br />

        <button>Submit</button> <button type="button" @click=${onDelete} >Delete</button>
    
    </form>
    `;

@customElement('inventory-editor')
export class InventoryEditor extends MobxLitElement {
    static styles = css`
        ${table}
        ${button}
        ${input}
    `;

    @property({ attribute: "item-id" })
    itemId: string = "";

    store = InventoryEditorStore.create();

    firstUpdated = async () => {
        await this.store.load(this.itemId);
    }

    saveItem = async () => {
        await this.store.save();
        location.assign('../../');
        alert('Item saved successfully.');
    }

    deleteItem = async () => {
        await this.store.delete();
        confirm('Are you sure?.');
        location.assign('../../');
        alert('Item deleted successfully.');
    }

    render = () =>
        (this.store.item)
            ? itemEditor(this.store.item, this.store.categories, this.saveItem, this.deleteItem)
            : 'Now loading...';
}