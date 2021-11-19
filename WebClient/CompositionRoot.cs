using Microsoft.Extensions.DependencyInjection;
using OrderManagement.Data.Inventory;
using OrderManagement.Data.Orders;
using OrderManagement.Services.Inventory;
using OrderManagement.Services.Orders;
using OrderManagement.Types.Inventory;
using OrderManagement.Types.Orders;

namespace OrderManagement.WebClient
{
    public static class CompositionRoot
    {
        public static void RegisterDependencies(this IServiceCollection services) {
            services.AddTransient<InventoryService>();
            services.AddTransient<OrderService>();
            services.AddTransient<IInventoryItemRepository, InventoryItemRepository>();
            services.AddTransient<IOrderRepository, OrderRepository>();
        }
    }
}