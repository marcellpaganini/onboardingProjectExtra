using System.Collections.Generic;
using System.Collections.Immutable;
using Microsoft.EntityFrameworkCore;
using OrderManagement.Data.Inventory;
using OrderManagement.Data.Orders;
using OrderManagement.Data.Customers;
using OrderManagement.Data.Categories;
using OrderManagement.Data.Employees;
using OrderManagement.Data.Offices;

namespace OrderManagement.Data
{
    public class AppDbContext : DbContext
    {
        private IEnumerable<BaseModel> DataModels { get; } = ImmutableList.Create<BaseModel>(
            new InventoryItemModel(),
            new OrderModel(),
            new CustomerModel(),
            new CategoryModel(),
            new EmployeeModel(),
            new OfficeModel()
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