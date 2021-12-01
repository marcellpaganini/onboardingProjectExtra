using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using OrderManagement.Types.Categories;

namespace OrderManagement.Services.Categories
{
    public class CategoryService
    {
        private readonly ICategoryRepository categoryRepository;

        public CategoryService(ICategoryRepository categoryRepository) {
            this.categoryRepository = categoryRepository;
        }

        public async Task<IEnumerable<Category>> Get() =>
            await categoryRepository.Get();

        public async Task<Category?> Get(Guid id) =>
            await categoryRepository.Get(id);

        public async Task<Category> Save(Category category) =>
            await categoryRepository.Save(category);
        
        public async Task<Category> Delete(Category category) =>
            await categoryRepository.Delete(category);
    }
}