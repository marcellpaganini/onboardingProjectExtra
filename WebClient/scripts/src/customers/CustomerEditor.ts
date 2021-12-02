import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { table, button, input } from '../common/componentStyle';
import { handlePropChange, handleSubmit, states } from '../common/formTools';
import { CustomerEditorStore } from './CustomerEditorStore';
import { ICustomer } from './Customer';


const customerEditor = (customer: ICustomer, onSave: () => {}, onDelete: () => {}) =>
    html`
    <form @submit=${handleSubmit(() => onSave())}>
        <label>
            <p>First Name</p>
            <input type="text" .value=${customer.firstName} @change=${handlePropChange(customer, (customer, val) => customer.setFirstName(val))}
            required />
        </label>
    
        <label>
            <p>Last Name</p>
            <input type="text" .value=${customer.lastName} @change=${handlePropChange(customer, (customer, val) => customer.setLastName(val))}
            required />
        </label>

        <label>
            <p>Delivery Address</p>
            <input type="text" .value=${customer.deliveryAddress} @change=${handlePropChange(customer, (customer, val) => customer.setDeliveryAddress(val))}
            required />
        </label>

        <label>
            <p>City</p>
            <input type="text" .value=${customer.city} @change=${handlePropChange(customer, (customer, val) => customer.setCity(val))}
            required />
        </label>

        <label>
            <p>Province</p>
            <select .value=${customer.state ?? ""} @change=${handlePropChange(customer, (customer, val) => {
                customer.setState(val);
                })}>
                ${states.map((state) => 
                    html`
                    <option value=${state}>${state}</option>
                    `
                )}
            </select>
        </label>

        <label>
            <p>Postal Code</p>
            <input type="text" .value=${customer.postalCode} @change=${handlePropChange(customer, (customer, val) => customer.setPostalCode(val))}
            required />
        </label>

        <label>
            <p>Country</p>
            <input type="text" .value=${customer.country} @change=${handlePropChange(customer, (customer, val) => customer.setCountry(val))}
            readonly />
        </label>

        <label>
            <p>Email Address</p>
            <input type="text" .value=${customer.emailAddress} @change=${handlePropChange(customer, (customer, val) => customer.setEmailAddress(val))}
            required />
        </label>

        <label>
            <p>Phone Number</p>
            <input type="text" .value=${customer.phoneNumber} @change=${handlePropChange(customer, (customer, val) => customer.setPhoneNumber(val))}
            required />
        </label>

        <br /> <br />

        <button>Submit</button> <button type="button" @click=${onDelete} >Delete</button>
    
    </form>
    `;

@customElement('customer-editor')
export class CustomerEditor extends MobxLitElement {
    static styles = css`
        ${table}
        ${button}
        ${input}
    `;

    @property({ attribute: "customer-id" })
    customerId: string = "";

    store = CustomerEditorStore.create();

    firstUpdated = async () => {
        await this.store.load(this.customerId);
    }

    saveCustomer = async () => {
        await this.store.save();
        location.assign('../../');
        alert('Customer saved successfully.');
    }

    deleteCustomer = async () => {
        await this.store.delete();
        confirm('Are you sure?');
        location.assign('../../');
        alert('Customer deleted successfully.');
    }

    render = () =>
        (this.store.customer)
            ? customerEditor(this.store.customer, this.saveCustomer, this.deleteCustomer)
            : 'Now loading...';
}