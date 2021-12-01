using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OrderManagement.Types.Categories
{
    public interface ICategoryRepository
    {
        Task<IEnumerable<Category>> Get();
        Task<Category?> Get(Guid? id);
        Task<Category> Save(Category customer);
        Task<Category> Delete(Category item);
    }
}
