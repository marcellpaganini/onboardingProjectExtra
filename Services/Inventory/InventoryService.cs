using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using OrderManagement.Types.Inventory;

namespace OrderManagement.Services.Inventory
{
    public class InventoryService
    {
        private readonly IInventoryItemRepository inventoryItemRepository;

        public InventoryService(IInventoryItemRepository inventoryItemRepository) {
            this.inventoryItemRepository = inventoryItemRepository;
        }

        public async Task<IEnumerable<InventoryItem>> Get() =>
            await inventoryItemRepository.Get();

        public async Task<InventoryItem?> Get(Guid id) =>
            await inventoryItemRepository.Get(id);

        public async Task<InventoryItem> Save(InventoryItem item) =>
            await inventoryItemRepository.Save(item);

        public async Task<InventoryItem> Delete(InventoryItem item) =>
            await inventoryItemRepository.Delete(item);
    }
}