using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OrderManagement.Types.Customers
{
    public interface ICustomerRepository
    {
        Task<IEnumerable<Customer>> Get();
        Task<Customer?> Get(Guid? id);
        Task<Customer> Save(Customer customer);
        Task<Customer> Delete(Customer item);
    }
}