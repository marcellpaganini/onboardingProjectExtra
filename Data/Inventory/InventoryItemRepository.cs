using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OrderManagement.Types.Inventory;

namespace OrderManagement.Data.Inventory
{
    public class InventoryItemRepository : IInventoryItemRepository
    {
        private readonly AppDbContext context;

        public InventoryItemRepository(AppDbContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<InventoryItem>> Get() =>
            await context.Set<InventoryItem>()
                .ToListAsync();

        public async Task<InventoryItem?> Get(Guid? id) =>
            await context.Set<InventoryItem>()
                .FirstOrDefaultAsync(r => r.Id == id);
                
        public async Task<InventoryItem> Save(InventoryItem item)
        {
            if(item.Id == null) {
                context.Add(item);
            } else {
                context.Update(item);
            }

            await context.SaveChangesAsync();

            return item;
        }

        public async Task<InventoryItem?> Delete(InventoryItem item)
        {
            context.Remove(item);
            await context.SaveChangesAsync();
            return item;
        }
    }
}