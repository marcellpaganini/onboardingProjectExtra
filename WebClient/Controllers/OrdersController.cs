using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OrderManagement.Services.Orders;
using OrderManagement.Types.Orders;

namespace OrderManagement.WebClient.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly OrderService orderService;

        public OrdersController(OrderService orderService)
        {
            this.orderService = orderService;
        }

        [HttpGet]
        public async Task<IEnumerable<Order>> Get() =>
            await orderService.Get();

        [HttpGet]
        [Route("{id}")]
        public async Task<Order?> Get(Guid id) =>
            await orderService.Get(id);

        [HttpPost]
        public async Task<Order> Post(Order order) =>
            await orderService.Save(order);
        
        [HttpDelete]
        public async Task<Order> Delete(Order order) =>
            await orderService.Delete(order);
    }
}