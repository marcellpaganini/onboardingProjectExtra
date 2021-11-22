import { css } from 'lit';

export const table = css`
table {
    /*margin: 0 auto;*/
    color: #333;
    background: white;
    border: 1px solid grey;
    font-size: 12pt;
    border-collapse: collapse;
}

table thead th,
table tfoot th {
    color: #777;
    background: rgba(0,0,0,.1);
}
table caption {
    padding:.5em;
}
table th,
table td {
    padding: .5em;
    border: 1px solid lightgrey;
}
`;