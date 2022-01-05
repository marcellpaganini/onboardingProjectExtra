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

export const defaultRoundChartDataStyle = {
    backgroundColor: [
        'rgba(26, 100, 156, 0.5)',
        'rgba(26, 100, 156, 0.2)',
        'rgba(255, 127, 80, 0.5)',
        'rgba(255, 127, 80, 0.2)',
        'rgba(80, 80, 80, 0.5)',
        'rgba(80, 80, 80, 0.2)',
        'rgba(255, 215, 0, 0.5)',
        'rgba(255, 215, 0, 0.2)'
    ],
    borderColor: [
        'rgba(26, 100, 156, 1)',
        'rgba(26, 100, 156, 1)',
        'rgba(255,127,80, 1)',
        'rgba(255,127,80, 1)',
        'rgba(80, 80, 80, 1)',
        'rgba(80, 80, 80, 1)',
        'rgba(255,215,0, 1)',
        'rgba(255,215,0, 1)'
    ],
    borderWidth: 1.5
};