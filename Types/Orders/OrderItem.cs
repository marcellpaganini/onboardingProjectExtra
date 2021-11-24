using System;

namespace OrderManagement.Types.Orders
{
    public record OrderItem
    {
        public Guid? Id { get; init; } = null;
        public Guid InventoryItemId { get; init; }
        public int Quantity { get; init; } = 1;
        public decimal BuyPricePerUnit { get; init; } = 0.00m;
        public double Tax {get; init; } = 0.15;
    }
}