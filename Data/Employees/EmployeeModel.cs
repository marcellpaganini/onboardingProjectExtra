using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrderManagement.Types.Employees;

namespace OrderManagement.Data.Employees
{
    public class EmployeeModel : BaseModel<Employee>
    {
        protected override void DefineModel(EntityTypeBuilder<Employee> model)
        {
            model.HasKey(r => r.Id);

            model.Property(r => r.Id)
                .ValueGeneratedOnAdd();
        }
    }
}
