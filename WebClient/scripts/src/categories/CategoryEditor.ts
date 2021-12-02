import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { table, button, input } from '../common/componentStyle';
import { handlePropChange, handleSubmit, states } from '../common/formTools';
import { CategoryEditorStore } from './CategoryEditorStore';
import { ICategory } from './Category';


const categoryEditor = (category: ICategory, onSave: () => {}, onDelete: () => {}) =>
    html`
    <form @submit=${handleSubmit(() => onSave())}>
        <label>
            <p>Name</p>
            <input type="text" .value=${category.name} @change=${handlePropChange(category, (category, val) => category.setName(val))}
            required />
        </label>
    
        <label>
            <p>Image</p>
            <input type="text" .value=${category.image} @change=${handlePropChange(category, (category, val) => category.setImage(val))}
            required />
        </label>

        <br /> <br />

        <button>Submit</button> <button type="button" @click=${onDelete} >Delete</button>
    
    </form>
    `;

@customElement('category-editor')
export class CategoryEditor extends MobxLitElement {
    static styles = css`
        ${table}
        ${button}
        ${input}
    `;

    @property({ attribute: "category-id" })
    categoryId: string = "";

    store = CategoryEditorStore.create();

    firstUpdated = async () => {
        await this.store.load(this.categoryId);
    }

    saveCategory = async () => {
        await this.store.save();
        location.assign('../../');
        alert('Category saved successfully.');
    }

    deleteCategory = async () => {
        await this.store.delete();
        confirm('Are you sure?');
        location.assign('../../');
        alert('Category deleted successfully.');
    }

    render = () =>
        (this.store.category)
            ? categoryEditor(this.store.category, this.saveCategory, this.deleteCategory)
            : 'Now loading...';
}
