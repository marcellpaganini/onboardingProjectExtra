module.exports = {
    entryPoints: [
        './src/inventory/InventoryList.ts',
        './src/inventory/InventoryEditor.ts',
        './src/orders/OrderEditor.ts',
        './src/orders/OrderViewer.ts',
        './src/orders/OrderList.ts',
        './src/customers/CustomersList.ts',
        './src/customer/CustomerEditor.ts',
    ],
    bundle: true,
    sourcemap: true,
    outdir: '../wwwroot/js',
    outbase: 'src',
    logLevel: 'debug'
};