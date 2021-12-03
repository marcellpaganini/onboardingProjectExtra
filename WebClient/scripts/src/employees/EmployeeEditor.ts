import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IOffice } from '../offices/Office';
import { table, button, input } from '../common/componentStyle';
import { handlePropChange, handleSubmit } from '../common/formTools';
import { EmployeeEditorStore } from './EmployeeEditorStore';
import { IEmployee } from './Employee';


const employeeEditor = (employee: IEmployee, offices: IOffice[], employees: IEmployee[], onSave: () => {}, onDelete: () => {}) =>
    html`
    <form @submit=${handleSubmit(() => onSave())}>
        <label>
            <p>First Name</p>
            <input type="text" .value=${employee.firstName} @change=${handlePropChange(employee, (employee, val) => employee.setFirstName(val))}
            required />
        </label>

        <label>
            <p>Last Name</p>
            <input type="text" .value=${employee.lastName} @change=${handlePropChange(employee, (employee, val) => employee.setLastName(val))}
            required />
        </label>

        <label>
            <p>Manager</p>
            <select .value=${employee.officeId?.id ?? ""} @change=${handlePropChange(employee, (employee, officeId) => {
                const matchingOffice = offices.find(o => o.id === officeId);
                employee.setOffice(matchingOffice);
                })} class="customer">
                <option value="">--Choose an Office--</option>
                ${offices.map((office) => 
                    html`
                    <option value=${office.id}>${office.city}</option>
                    `
                )}
            </select>
        </label>

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

@customElement('employee-editor')
export class EmployeeEditor extends MobxLitElement {
    static styles = css`
        ${table}
        ${button}
        ${input}
    `;

    @property({ attribute: "employee-id" })
    employeeId: string = "";

    store = EmployeeEditorStore.create();

    firstUpdated = async () => {
        await this.store.load(this.employeeId);
        const managers = this.store.managers;
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

    managers = this.store.managers;

    render = () =>
        (this.store.item)
            ? employee(this.store.item, this.store.categories, this.saveItem, this.deleteItem)
            : 'Now loading...';
}