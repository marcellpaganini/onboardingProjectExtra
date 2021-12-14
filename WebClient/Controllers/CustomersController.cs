using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OrderManagement.Services.Customers;
using OrderManagement.Types.Customers;
using OrderManagement.Types.Wrappers;
using System.Linq;
using OrderManagement.Services;
using OrderManagement.WebClient.Controllers.Helpers;

namespace OrderManagement.WebClient.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomersController : ControllerBase
    {
        private readonly CustomerService customerService;
        private readonly IUriService uriService;

        public CustomersController(CustomerService customerService, IUriService uriService)
        {
            this.customerService = customerService;
            this.uriService = uriService;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] PaginationFilter filter) 
        {
            var route = Request.Path.Value;
            var validFilter = new PaginationFilter(filter.PageNumber, filter.PageSize);
            var customers = await customerService.Get();
            var pagedData = customers
                .Skip((validFilter.PageNumber - 1) * validFilter.PageSize)
                .Take(validFilter.PageSize)
                .ToList();

            var totalRecords = customers.Count();
            var pagedResponse = PaginationHelper.CreatePagedReponse<Customer>(pagedData, validFilter, totalRecords, uriService, route!);
            return Ok(pagedResponse);
        }

        [HttpGet]
        [Route("flat/")]
        public async Task<IEnumerable<Customer>> Get() => 
            await customerService.Get();
        

        [HttpGet]
        [Route("{id}")]
        public async Task<Customer?> Get(Guid id) =>
            await customerService.Get(id);
        

        [HttpPost]
        public async Task<Customer> Post(Customer customer) =>
            await customerService.Save(customer);

        [HttpDelete]
        public async Task<Customer> Delete(Customer customer) =>
            await customerService.Delete(customer);
    }
}