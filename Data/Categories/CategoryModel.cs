using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrderManagement.Types.Categories;

namespace OrderManagement.Data.Categories
{
    public class CategoryModel : BaseModel<Category>
    {
        protected override void DefineModel(EntityTypeBuilder<Category> model)
        {
            model.HasKey(r => r.Id);

            model.Property(r => r.Id)
                .ValueGeneratedOnAdd();
        }
    }
}