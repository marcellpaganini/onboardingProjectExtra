using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using OrderManagement.Types.Customers;

namespace OrderManagement.Services.Customers
{
    public class CustomerService
    {
        private readonly ICustomerRepository customerRepository;

        public CustomerService(ICustomerRepository customerRepository) {
            this.customerRepository = customerRepository;
        }

        public async Task<IEnumerable<Customer>> Get() =>
            await customerRepository.Get();

        public async Task<Customer?> Get(Guid id) =>
            await customerRepository.Get(id);

        public async Task<Customer> Save(Customer customer) =>
            await customerRepository.Save(customer);
    }
}