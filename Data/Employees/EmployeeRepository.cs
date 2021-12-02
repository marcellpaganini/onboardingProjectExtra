using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OrderManagement.Types.Employees;

namespace OrderManagement.Data.Employees
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly AppDbContext context;

        public EmployeeRepository(AppDbContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Employee>> Get() =>
            await context.Set<Employee>()
                .ToListAsync();

        public async Task<Employee?> Get(Guid? id) =>
            await context.Set<Employee>()
                .FirstOrDefaultAsync(r => r.Id == id);
        public async Task<Employee> Save(Employee employee)
        {
            if(employee.Id == null) {
                context.Add(employee);
            } else {
                context.Update(employee);
            }

            await context.SaveChangesAsync();

            return employee;
        }

        public async Task<Employee> Delete(Employee employee)
        {
            context.Remove(employee);
            await context.SaveChangesAsync();
            return employee;
        }
    }
}
