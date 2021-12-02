using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using OrderManagement.Types.Orders;

namespace OrderManagement.Services.Orders
{
    public class OrderService
    {
        private readonly IOrderRepository orderRepository;

        public OrderService(IOrderRepository orderRepository) {
            this.orderRepository = orderRepository;
        }

        public async Task<IEnumerable<Order>> Get() =>
            await orderRepository.Get();

        public async Task<Order?> Get(Guid id) =>
            await orderRepository.Get(id);

        public async Task<Order> Save(Order order) =>
            await orderRepository.Save(order);

        public async Task<Order> Delete(Order order) =>
            await orderRepository.Delete(order);
    }
}