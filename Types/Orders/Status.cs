namespace OrderManagement.Types.Orders
{
    public class Status
   {
       enum OrderStatus {
            PendingPayment = 1,
            PaymentReceived,
            Shipped,
            OnVehicleForDelivery,
            Delivered,
            Canceled,
            ReturnedToSender
       }

       public string getStatus(int status) {
        switch (status) {
            case (int)OrderStatus.PendingPayment: return "⏳ Pending payment";
            case (int)OrderStatus.PaymentReceived: return "🧾 Payment received";
            case (int)OrderStatus.Shipped: return "📦 Shipped";
            case (int)OrderStatus.OnVehicleForDelivery: return "🚚 On vehicle for delivery";
            case (int)OrderStatus.Delivered: return "✅ Delivered";
            case (int)OrderStatus.Canceled: return "❌ Canceled";
            case (int)OrderStatus.ReturnedToSender: return "↩ Returned to sender";
            default: return "No status";
        }
    }

   }
}

