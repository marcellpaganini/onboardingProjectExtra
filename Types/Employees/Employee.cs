using System;
using System.Collections.Generic;
using OrderManagement.Types.Customers;
using OrderManagement.Types.Offices;

namespace OrderManagement.Types.Employees
{
    public record Employee
    {
        public Guid? Id { get; init; } = null;
        public Guid OfficeId { get; init; }
        public string Manager { get; init; } = "";
        public string FirstName { get; init; } = "";
        public string LastName { get; init; } = "";
        public string EmailAddress { get; init; } = "";
        public string Extension { get; init; } = "";
        public string JobTitle { get; init; } = "";
        public Office? Office { get; init; } = null;
        public ICollection<Customer> Customers { get; init; } = new List<Customer>();
    }
}