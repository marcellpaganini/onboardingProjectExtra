using System;
using System.Collections.Generic;
using System.Linq;

namespace OrderManagement.Types.Orders
{
    public record Order
        {
            public Guid? Id { get; init; } = null;
            public string CustomerName { get; init; } = "";
            public string DeliveryAddress { get; init; } = "";
            public string EmailAddress { get; init; } = "";
            public string PhoneNumber { get; init; } = "";
            public ICollection<OrderItem> Items { get; init; } = new List<OrderItem>();
        }
}