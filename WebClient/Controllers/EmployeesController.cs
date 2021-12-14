using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OrderManagement.Services.Employees;
using OrderManagement.Types.Employees;
using System.Linq;
using OrderManagement.Services;
using OrderManagement.WebClient.Controllers.Helpers;

namespace OrderManagement.WebClient.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeeService employeeService;
        private readonly IUriService uriService;

        public EmployeesController(EmployeeService employeeService, IUriService uriService)
        {
            this.employeeService = employeeService;
            this.uriService = uriService;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] PaginationFilter filter) 
        {
            var route = Request.Path.Value;
            var validFilter = new PaginationFilter(filter.PageNumber, filter.PageSize);
            var employees = await employeeService.Get();
            var pagedData = employees
                .Skip((validFilter.PageNumber - 1) * validFilter.PageSize)
                .Take(validFilter.PageSize)
                .ToList();

            var totalRecords = employees.Count();
            var pagedResponse = PaginationHelper.CreatePagedReponse<Employee>(pagedData, validFilter, totalRecords, uriService, route!);
            return Ok(pagedResponse);
        }

        [HttpGet]
        [Route("flat/")]
        public async Task<IEnumerable<Employee>> Get() =>
            await employeeService.Get();

        [HttpGet]
        [Route("{id}")]
        public async Task<Employee?> Get(Guid id) =>
            await employeeService.Get(id);

        [HttpPost]
        public async Task<Employee> Post(Employee employee) =>
            await employeeService.Save(employee);

        [HttpDelete]
        public async Task<Employee> Delete(Employee employee) =>
            await employeeService.Delete(employee);
    }
}