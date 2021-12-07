using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OrderManagement.Services.Customers;
using OrderManagement.Types.Customers;
using OrderManagement.Types.Wrappers;

namespace OrderManagement.WebClient.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomersController : ControllerBase
    {
        private readonly CustomerService customerService;

        public CustomersController(CustomerService customerService)
        {
            this.customerService = customerService;
        }

        [HttpGet]
        public async Task<IEnumerable<Customer>> Get() =>
            await customerService.Get();

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> Get(Guid id) {
            var customer = await customerService.Get(id);
            return Ok(new Response<Customer>(customer));
        }

        [HttpPost]
        public async Task<Customer> Post(Customer customer) =>
            await customerService.Save(customer);

        [HttpDelete]
        public async Task<Customer> Delete(Customer customer) =>
            await customerService.Delete(customer);
    }
}