import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { OrderListStore } from './OrderListStore';
import { IOrder } from './Order';
import { table, button } from '../common/componentStyle';
import {helperFunctions } from '../common/formTools';
import { Chart, ChartConfiguration } from 'chart.js';
import { defaultChartDataStyle } from '../common/chartDefaults';


interface ChartInfo {
    title: string;
    data: {
        label: string;
        value: number;
    }[]
}

const doughnutChart = ({title, data}: ChartInfo) => {
    const canvas = document.createElement('canvas');
    canvas.height = 300;
    canvas.width = 400;

    const barData = {
        labels: data.map(d => d.label),
        datasets: [{
            data: data.map(d => d.value),
            ...defaultChartDataStyle
        }]
    };

    const barConfig: ChartConfiguration = {
        type: 'bar',
        data: barData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: title,
                    font: {
                        size: 24
                    }
                },
                legend: {
                    display: false
                }
            }
        }
    }

    new Chart(canvas, barConfig);

    return canvas;
}


const ordersRow = ({id, customerId, totalPrice, status, orderDate}: IOrder) =>
    html`
    <tr>
        <td>${customerId?.fullName}</td>
        <td>${orderDate.substring(0, orderDate.indexOf("T"))}</td>
        <td>${helperFunctions.getStatus(status)}</td>
        <td>${helperFunctions.priceToCurrency(totalPrice)}</td>
        <td>
            <a href="${AppBasePath}/orders/View/${id}">View</a>
        </td>
        <td>
            <a href="${AppBasePath}/orders/Edit/${id}">Edit</a>
        </td>
    </tr>
    `;

const ordersTable = (orders: IOrder[] = [], doughnutChart: any) =>
    html`
    <table>
        <thead>
            <tr>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th></th>
            <th></th>
            </tr>
        </thead>
    
        <tbody>
            ${orders.map(ordersRow)}
        </tbody>
    </table> <br /><br />
    ${doughnutChart({
            title: 'Orders by Customers',
            data: [{ label: 'asdf', value: 3 }, { label: 'ccfff', value: 5 }, { label: 'aa', value: 1 }]
    })}
    
    `;



@customElement('order-list')
export class OrderList extends MobxLitElement {
    static styles = css`
        ${table}
        ${button}
    `;

    store = OrderListStore.create();

    firstUpdated = async () => {
        await this.store.load();
        
    }

    render = () =>
        (this.store.orders)
            ? ordersTable(this.store.sortedOrders, doughnutChart)
            : 'Loading...';

    createRenderRoot() {
        return this;
    }
}