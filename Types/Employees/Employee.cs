using System;
using System.Collections.Generic;
using OrderManagement.Types.Customers;

namespace OrderManagement.Types.Employees
{
    public record Employee
    {
        public Guid? Id { get; init; } = null;
        public string Manager { get; init; } = "";
        public string FirstName { get; init; } = "";
        public string LastName { get; init; } = "";
        public string EmailAddress { get; init; } = "";
        public string Extension { get; init; } = "";
        public string JobTitle { get; init; } = "";
        public ICollection<Customer> Customers { get; init; } = new List<Customer>();
    }
}