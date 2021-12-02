import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CategoriesListStore } from './CategoriesListStore';
import { ICategory } from './Category';
import { table, button } from '../common/componentStyle';


const categoriesRow = ({ id, name, image }: ICategory) =>
    html`
    <tr>
        <td>${name}</td>
        <td><img src="${image}" width="80" height="80"></td>
        <td>
            <a href="${AppBasePath}/Categories/Edit/${id}">Edit</a>
        </td>
    </tr>
    `;

const categoriesTable = (categories: ICategory[] = []) =>
    html`
    <table>
        <thead>
            <th>Name</th>
            <th>Image</th>
            <th></th>
        </thead>
    
        <tbody>
            ${categories.map(categoriesRow)}
        </tbody>
    </table>
    <br /><br />
    `;

@customElement('categories-list')
export class CategoriesList extends MobxLitElement {
    static styles = css`
        ${table}
        ${button}
    `;

    store = CategoriesListStore.create();

    firstUpdated = async () => {
        this.store.load();
    }

    render = () =>
        (this.store.categories)
            ? categoriesTable(this.store.categories)
            : 'Loading...';
}
