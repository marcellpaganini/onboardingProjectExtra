using System;

namespace OrderManagement.Types.Customers
{
    public record Customer
    {
        public Guid? Id { get; init; } = null;
        public string FirstName { get; init; } = "";
        public string LastName { get; init; } = "";
        public string DeliveryAddress { get; init; } = "";
        public string City { get; init; } = "";
        public string State { get; init; } = "";
        public string PostalCode { get; init; } = "";
        public string Country { get; init; } = "";
        public string EmailAddress { get; init; } = "";
        public string PhoneNumber { get; init; } = "";
    }
}