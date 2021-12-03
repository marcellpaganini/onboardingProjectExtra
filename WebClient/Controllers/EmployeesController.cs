using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OrderManagement.Services.Employees;
using OrderManagement.Types.Employees;

namespace OrderManagement.WebClient.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeeService employeeService;

        public EmployeesController(EmployeeService employeeService)
        {
            this.employeeService = employeeService;
        }

        [HttpGet]
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