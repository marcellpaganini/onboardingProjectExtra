using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OrderManagement.Types.Employees
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<Employee>> Get();
        Task<Employee?> Get(Guid? id);
        Task<Employee> Save(Employee employee);
        Task<Employee> Delete(Employee employee);
    }
}