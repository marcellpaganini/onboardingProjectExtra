import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IOffice } from '../offices/Office';
import { table, button, input } from '../common/componentStyle';
import { handlePropChange, handleSubmit } from '../common/formTools';
import { EmployeeEditorStore } from './EmployeeEditorStore';
import { IEmployee } from './Employee';


const employeeEditor = (employee: IEmployee, offices: IOffice[], employees: IEmployee[] = [], onSave: () => {}, onDelete: () => {}) =>
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
            <p>Office</p>
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
            <p>Manager</p>
            <select .value=${employee.id ?? ""} @change=${handlePropChange(employee, (employee, id) => {
                employee.setManager(id);
                })} class="customer">
                <option value="">--Choose a manager--</option>
                ${employees.map((employees) => 
                    html`
                    <option value=${employee.id}>${employee.firstName} ${employee.lastName}</option>
                    `
                )}
            </select>
        </label>

        <label>
            <p>Email Address</p>
            <input type="text" .value=${employee.emailAddress} @change=${handlePropChange(employee, (employee, val) => employee.setEmailAddress(val))}
            required />
        </label>

        <label>
            <p>Extension</p>
            <input type="text" .value=${employee.extension} @change=${handlePropChange(employee, (employee, val) => employee.setExtension(val))}
            required />
        </label>

        <label>
            <p>Job Title</p>
            <input type="text" .value=${employee.jobTitle} @change=${handlePropChange(employee, (employee, val) => employee.setJobTitle(val))}
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
    }

    saveEmployee = async () => {
        await this.store.save();
        location.assign('../../');
        alert('Employee saved successfully.');
    }

    deleteEmployee = async () => {
        await this.store.delete();
        confirm('Are you sure?.');
        location.assign('../../');
        alert('Item deleted successfully.');
    }

    render = () =>
        (this.store.employee)
            ? employeeEditor(this.store.employee, this.store.offices, this.store.managers, this.saveEmployee, this.deleteEmployee)
            : 'Now loading...';
}