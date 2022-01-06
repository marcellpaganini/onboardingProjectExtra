import { MobxLitElement } from '@adobe/lit-mobx';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IOrderListStore, OrderListStore } from './OrderListStore';
import { IOrder } from './Order';
import { table, button } from '../common/componentStyle';
import {helperFunctions } from '../common/formTools';
import { Chart, ChartConfiguration } from 'chart.js';
import { defaultChartDataStyle, defaultRoundChartDataStyle } from '../common/chartDefaults';


interface ChartInfo {
    title: string;
    data: {
        label: string;
        value: number;
    }[]
}

const barChart = ({title, data}: ChartInfo) => {
    const canvas = document.createElement('canvas');
    canvas.height = 40;
    canvas.width = 100;

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

const doughnutChart = ({title, data}: ChartInfo) => {
    const canvas = document.createElement('canvas');
    canvas.height = 40;
    canvas.width = 40;

    const doghnutData = {
        labels: data.map(d => d.label),
        datasets: [{
            data: data.map(d => d.value),
            ...defaultRoundChartDataStyle
        }]
    };

    const doughnutConfig: ChartConfiguration = {
        type: 'doughnut',
        data: doghnutData,
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
                    display: true
                }
            }
        }
    }

    new Chart(canvas, doughnutConfig);

    return canvas;
}

const pieChart = ({title, data}: ChartInfo) => {
    const canvas = document.createElement('canvas');
    canvas.height = 40;
    canvas.width = 40;

    const pieData = {
        labels: data.map(d => d.label),
        datasets: [{
            data: data.map(d => d.value),
            ...defaultRoundChartDataStyle
        }]
    };

    const pieConfig: ChartConfiguration = {
        type: 'pie',
        data: pieData,
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
                    display: true
                }
            }
        }
    }

    new Chart(canvas, pieConfig);

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

const ordersTable = (orders: IOrder[] = [], barChart: any, doughnutChart: any, pieChart: any, orderListStore: IOrderListStore) =>
    html`
    <div style='overflow-x: auto;'>
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
                ${orders.slice(-10).map(ordersRow)}
            </tbody>
        </table>
    </div>
     <br /><br />
    ${barChart({
            title: 'Orders by Customers',
            data: [...orderListStore.ordersPerCustomer]
    })} <br /><br />
    <section style: "width: 100%;"">
        <div style="width:50%; float: left;">
            ${doughnutChart({
                    title: 'Orders by Status',
                    data: [...orderListStore.ordersPerStatuses]
            })}
        </div> 
        <div style="width:50%; float: right; ">
            ${pieChart({
                    title: 'Top 5 Customers',
                    data: [...orderListStore.totalByTop5Customers]
            })}
        </div>
    </section>
    
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
            ? ordersTable(this.store.sortedOrders, barChart, doughnutChart, pieChart, this.store)
            : 'Loading...';

    createRenderRoot() {
        return this;
    }
}