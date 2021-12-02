using System;
using System.Collections.Generic;
using OrderManagement.Types.Orders;
using OrderManagement.Types.Employees;

namespace OrderManagement.Types.Customers
{
    public record Customer
    {
        public Guid? Id { get; init; } = null;
        public Guid EmployeeId { get; init; }
        public string FirstName { get; init; } = "";
        public string LastName { get; init; } = "";
        public string DeliveryAddress { get; init; } = "";
        public string City { get; init; } = "";
        public string State { get; init; } = "";
        public string PostalCode { get; init; } = "";
        public string Country { get; init; } = "";
        public string EmailAddress { get; init; } = "";
        public string PhoneNumber { get; init; } = "";
        public ICollection<Order> Orders { get; init; } = new List<Order>();
        public Employee? Employee { get; init; } = null;
    }
}