using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrderManagement.Types.Offices;

namespace OrderManagement.Data.Offices
{
    public class OfficeModel : BaseModel<Office>
    {
        protected override void DefineModel(EntityTypeBuilder<Office> model)
        {
            model.HasKey(r => r.Id);

            model.Property(r => r.Id)
                .ValueGeneratedOnAdd();
        }
    }
}
