using System;

namespace OrderManagement.Types.Inventory
{
    public record InventoryItem
    {
        public Guid? Id { get; init; } = null;
        public string Name { get; init; } = "";
        public decimal Price { get; init; } = 0.00m;
    }
}