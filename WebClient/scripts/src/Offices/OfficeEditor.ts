import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { table, button, input } from '../common/componentStyle';
import { handlePropChange, handleSubmit, states } from '../common/formTools';
import { OfficeEditorStore } from './OfficeEditorStore';
import { IOffice } from './Office';


const officeEditor = (office: IOffice, onSave: () => {}, onDelete: () => {}) =>
    html`
    <form @submit=${handleSubmit(() => onSave())}>
        <label>
            <p>First Name</p>
            <input type="text" .value=${office.city} @change=${handlePropChange(office, (office, val) => office.setCity(val))}
            required />
        </label>
    
        <label>
            <p>Last Name</p>
            <input type="text" .value=${office.phone} @change=${handlePropChange(office, (office, val) => office.setPhone(val))}
            required />
        </label>

        <label>
            <p>Delivery Address</p>
            <input type="text" .value=${office.address} @change=${handlePropChange(office, (office, val) => office.setAddress(val))}
            required />
        </label>

        <label>
            <p>Province</p>
            <select .value=${office.state ?? ""} @change=${handlePropChange(office, (office, val) => {
                office.setState(val);
                })}>
                ${states.map((state) => 
                    html`
                    <option value=${state}>${state}</option>
                    `
                )}
            </select>
        </label>

        <label>
            <p>Country</p>
            <input type="text" .value=${office.country} @change=${handlePropChange(office, (office, val) => office.setCountry(val))}
            readonly />
        </label>

        <label>
            <p>Postal Code</p>
            <input type="text" .value=${office.postalCode} @change=${handlePropChange(office, (office, val) => office.setPostalCode(val))}
            required />
        </label>

        <br /> <br />

        <button>Submit</button> <button type="button" @click=${onDelete} >Delete</button>
    
    </form>
    `;

@customElement('office-editor')
export class OfficeEditor extends MobxLitElement {
    static styles = css`
        ${table}
        ${button}
        ${input}
    `;

    @property({ attribute: "office-id" })
    officeId: string = "";

    store = OfficeEditorStore.create();

    firstUpdated = async () => {
        await this.store.load(this.officeId);
    }

    saveOffice = async () => {
        await this.store.save();
        location.assign('../../');
        alert('Office saved successfully.');
    }

    deleteOffice = async () => {
        await this.store.delete();
        confirm('Are you sure?');
        location.assign('../../');
        alert('Office deleted successfully.');
    }

    render = () =>
        (this.store.office)
            ? officeEditor(this.store.office, this.saveOffice, this.deleteOffice)
            : 'Now loading...';
}