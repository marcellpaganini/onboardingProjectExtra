using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OrderManagement.Types.Orders;

namespace OrderManagement.Data.Orders
{
    public class OrderRepository : IOrderRepository
    {
        private readonly AppDbContext context;

        public OrderRepository(AppDbContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Order>> Get() =>
            await context.Set<Order>()
                .Include(o => o.Items)
                .ToListAsync();

        public async Task<Order?> Get(Guid id) =>
            await context.Set<Order>()
                .Include(o => o.Items)
                .FirstOrDefaultAsync(r => r.Id == id);
        public async Task<Order> Save(Order order)
        {
            if(order.Id == null) {
                context.Add(order);
            } else {
                context.Update(order);
            }

            await context.SaveChangesAsync();

            return order;
        }
    }
}
