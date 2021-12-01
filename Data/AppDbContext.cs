using System.Collections.Generic;
using System.Collections.Immutable;
using Microsoft.EntityFrameworkCore;
using OrderManagement.Data.Inventory;
using OrderManagement.Data.Orders;
using OrderManagement.Data.Customers;
using OrderManagement.Data.Categories;


namespace OrderManagement.Data
{
    public class AppDbContext : DbContext
    {
        private IEnumerable<BaseModel> DataModels { get; } = ImmutableList.Create<BaseModel>(
            new InventoryItemModel(),
            new OrderModel(),
            new CustomerModel(),
            new CategoryModel()
        );

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var model in DataModels)
            {
                model.AddModelTo(modelBuilder);
            }
        }
    }
}