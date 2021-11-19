using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OrderManagement.Types.Inventory
{
    public interface IInventoryItemRepository
    {
        Task<IEnumerable<InventoryItem>> Get();
        Task<InventoryItem?> Get(Guid? id);
        Task<InventoryItem> Save(InventoryItem item);
    }
}