using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrderManagement.Types.Inventory;

namespace OrderManagement.Data.Inventory
{
    public class InventoryItemModel : BaseModel<InventoryItem>
    {
        protected override void DefineModel(EntityTypeBuilder<InventoryItem> model)
        {
            model.HasKey(r => r.Id);

            model.Property(r => r.Id)
                .ValueGeneratedOnAdd();
        }
    }
}