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
            case (int)OrderStatus.PendingPayment: return "โณ Pending payment";
            case (int)OrderStatus.PaymentReceived: return "๐งพ Payment received";
            case (int)OrderStatus.Shipped: return "๐ฆ Shipped";
            case (int)OrderStatus.OnVehicleForDelivery: return "๐ On vehicle for delivery";
            case (int)OrderStatus.Delivered: return "โ Delivered";
            case (int)OrderStatus.Canceled: return "โ Canceled";
            case (int)OrderStatus.ReturnedToSender: return "โฉ Returned to sender";
            default: return "No status";
        }
    }

   }
}

