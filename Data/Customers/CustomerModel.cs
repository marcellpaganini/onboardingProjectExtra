using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrderManagement.Types.Customers;

namespace OrderManagement.Data.Customers
{
    public class CustomerModel : BaseModel<Customer>
    {
        protected override void DefineModel(EntityTypeBuilder<Customer> model)
        {
            model.HasKey(r => r.Id);

            model.Property(r => r.Id)
                .ValueGeneratedOnAdd();
        }
    }
}