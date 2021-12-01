using System;
using System.Collections.Generic;
using OrderManagement.Types.Categories;


namespace OrderManagement.Types.Inventory
{
    public record InventoryItem
    {
        public Guid? Id { get; init; } = null;
        public Guid CategoryId { get; init; }
        public string Name { get; init; } = "";
        public decimal Price { get; init; } = 0.00m;
        public string Image { get; init; } = "";
        public Category? Category { get; init; } = null;
    }
}
