using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace OrderManagement.Data
{
    public abstract class BaseModel
    {
        internal abstract void AddModelTo(ModelBuilder modelBuilder);
    }

    public abstract class BaseModel<T> : BaseModel where T : class
    {
        internal override void AddModelTo(ModelBuilder modelBuilder)
        {
            var model = modelBuilder.Entity<T>();
            DefineModel(model);
        }

        protected virtual void DefineModel(EntityTypeBuilder<T> model)
        {
            return;
        }
    }
}