using System;
using System.Collections.Generic;
using System.Linq;
using OrderManagement.Types.Customers;

namespace OrderManagement.Types.Orders
{
    public record Order
        {
            public Guid? Id { get; init; } = null;
            public Guid CustomerId { get; init; }
            public DateTime OrderDate { get; init; } = new DateTime(01, 01, 0001);
            public int Status { get; init; } = 1;
            public ICollection<OrderItem> Items { get; init; } = new List<OrderItem>();
            public Customer? Customer { get; init; } = null;
        }
}