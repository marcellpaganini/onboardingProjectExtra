using System;
using System.Collections.Generic;
using OrderManagement.Types.Inventory;

namespace OrderManagement.Types.Categories
{
    public record Category
    {
        public Guid? Id { get; init; } = null;
        public string Name { get; init; } = "";
        public string Image { get; init; } = "";   
        public ICollection<InventoryItem> Items { get; init; } = new List<InventoryItem>();         
    }
}
