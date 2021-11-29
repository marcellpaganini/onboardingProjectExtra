using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OrderManagement.Types.Customers;

namespace OrderManagement.Data.Customers
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly AppDbContext context;

        public CustomerRepository(AppDbContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Customer>> Get() =>
            await context.Set<Customer>()
                .Include(o => o.Orders)
                .ToListAsync();

        public async Task<Customer?> Get(Guid? id) =>
            await context.Set<Customer>()
                .Include(o => o.Orders)
                .FirstOrDefaultAsync(r => r.Id == id);
        public async Task<Customer> Save(Customer customer)
        {
            if(customer.Id == null) {
                context.Add(customer);
            } else {
                context.Update(customer);
            }

            await context.SaveChangesAsync();

            return customer;
        }
    }
}
