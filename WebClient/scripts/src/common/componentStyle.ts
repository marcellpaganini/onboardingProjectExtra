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

export const button = css`
    button {
        background-color: navy;
        border: none;
        color: white;
        padding: 5px 10px;
        text-align: center;
        font-size: 16px;
        margin: 4px 2px;
        opacity: 0.6;
        transition: 0.3s;
        display: inline-block;
        text-decoration: none;
        cursor: pointer;
    }

    button:hover {
        opacity: 1
    }

    .btnRemove {
        background-color: white;
        padding: 0;
    }
`;