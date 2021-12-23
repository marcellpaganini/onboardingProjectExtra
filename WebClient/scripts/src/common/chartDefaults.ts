import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export const defaultChartDataStyle = {
    backgroundColor: [
        'rgba(26, 100, 156, 0.5)',
        'rgba(26, 100, 156, 0.2)',
    ],
    borderColor: [
        'rgba(26, 100, 156, 1)',
        'rgba(26, 100, 156, 1)'
    ],
    borderWidth: 1.5
};