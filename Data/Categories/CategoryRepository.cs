using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OrderManagement.Types.Categories;

namespace OrderManagement.Data.Categories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly AppDbContext context;

        public CategoryRepository(AppDbContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Category>> Get() =>
            await context.Set<Category>()
                .ToListAsync();

        public async Task<Category?> Get(Guid? id) =>
            await context.Set<Category>()
                .FirstOrDefaultAsync(r => r.Id == id);
        public async Task<Category> Save(Category category)
        {
            if(category.Id == null) {
                context.Add(category);
            } else {
                context.Update(category);
            }

            await context.SaveChangesAsync();

            return category;
        }

        public async Task<Category> Delete(Category category)
        {
            context.Remove(category);
            await context.SaveChangesAsync();
            return category;
        }
    }
}
