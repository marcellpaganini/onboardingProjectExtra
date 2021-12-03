module.exports = {
    entryPoints: [
        './src/inventory/InventoryList.ts',
        './src/inventory/InventoryEditor.ts',
        './src/orders/OrderEditor.ts',
        './src/orders/OrderViewer.ts',
        './src/orders/OrderList.ts',
        './src/customers/CustomersList.ts',
        './src/customers/CustomerEditor.ts',
        './src/categories/CategoriesList.ts',
        './src/categories/CategoryEditor.ts',
        './src/offices/OfficesList.ts',
        './src/offices/OfficeEditor.ts',
        './src/employees/EmployeesList.ts',
        './src/employees/EmployeeEditor.ts',
    ],
    bundle: true,
    sourcemap: true,
    outdir: '../wwwroot/js',
    outbase: 'src',
    logLevel: 'debug'
};