using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using OrderManagement.Types.Employees;

namespace OrderManagement.Services.Employees
{
    public class EmployeeService
    {
        private readonly IEmployeeRepository employeeRepository;

        public EmployeeService(IEmployeeRepository employeeRepository) {
            this.employeeRepository = employeeRepository;
        }

        public async Task<IEnumerable<Employee>> Get() =>
            await employeeRepository.Get();

        public async Task<Employee?> Get(Guid id) =>
            await employeeRepository.Get(id);

        public async Task<Employee> Save(Employee employee) =>
            await employeeRepository.Save(employee);
        
        public async Task<Employee> Delete(Employee employee) =>
            await employeeRepository.Delete(employee);
    }
}
