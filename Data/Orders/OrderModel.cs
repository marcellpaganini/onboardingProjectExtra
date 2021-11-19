using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrderManagement.Types.Orders;

namespace OrderManagement.Data.Orders
{
    public class OrderModel : BaseModel<Order>
    {
        protected override void DefineModel(EntityTypeBuilder<Order> model)
        {
            model.HasKey(r => r.Id);

            model.Property(r => r.Id)
                .ValueGeneratedOnAdd();
        }
    }
}