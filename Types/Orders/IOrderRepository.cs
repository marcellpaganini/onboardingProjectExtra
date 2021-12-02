using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OrderManagement.Types.Orders
{
    public interface IOrderRepository
    {
        Task<IEnumerable<Order>> Get();
        Task<Order?> Get(Guid id);
        Task<Order> Save(Order order);
        Task<Order> Delete(Order order);
    }
}