using System;
using System.Collections.Generic;
using OrderManagement.Types.Employees;

namespace OrderManagement.Types.Offices
{
    public record Office
    {
        public Guid? Id { get; init; } = null;
        public string City { get; init; } = "";
        public string Phone { get; init; } = "";
        public string Address { get; init; } = "";
        public string State { get; init; } = "";
        public string Country { get; init; } = "";
        public string PostalCode { get; init; } = "";
        public ICollection<Employee> Employees { get; init; } = new List<Employee>();
    }
}