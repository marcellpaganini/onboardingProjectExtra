using Microsoft.Extensions.DependencyInjection;
using OrderManagement.Data.Inventory;
using OrderManagement.Data.Orders;
using OrderManagement.Data.Customers;
using OrderManagement.Data.Categories;
using OrderManagement.Data.Offices;
using OrderManagement.Data.Employees;
using OrderManagement.Services.Inventory;
using OrderManagement.Services.Orders;
using OrderManagement.Services.Customers;
using OrderManagement.Services.Categories;
using OrderManagement.Services.Offices;
using OrderManagement.Services.Employees;
using OrderManagement.Types.Inventory;
using OrderManagement.Types.Orders;
using OrderManagement.Types.Customers;
using OrderManagement.Types.Categories;
using OrderManagement.Types.Offices;
using OrderManagement.Types.Employees;

namespace OrderManagement.WebClient
{
    public static class CompositionRoot
    {
        public static void RegisterDependencies(this IServiceCollection services) {
            services.AddTransient<InventoryService>();
            services.AddTransient<OrderService>();
            services.AddTransient<CustomerService>();
            services.AddTransient<CategoryService>();
            services.AddTransient<OfficeService>();
            services.AddTransient<EmployeeService>();
            services.AddTransient<IInventoryItemRepository, InventoryItemRepository>();
            services.AddTransient<IOrderRepository, OrderRepository>();
            services.AddTransient<ICustomerRepository, CustomerRepository>();
            services.AddTransient<ICategoryRepository, CategoryRepository>();
            services.AddTransient<IOfficeRepository, OfficeRepository>();
            services.AddTransient<IEmployeeRepository, EmployeeRepository>();
        }
    }
}