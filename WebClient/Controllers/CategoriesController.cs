using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OrderManagement.Services.Categories;
using OrderManagement.Types.Categories;

namespace OrderManagement.WebClient.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly CategoryService categoryService;

        public CategoriesController(CategoryService categoryService)
        {
            this.categoryService = categoryService;
        }

        [HttpGet]
        public async Task<IEnumerable<Category>> Get() =>
            await categoryService.Get();

        [HttpGet]
        [Route("{id}")]
        public async Task<Category?> Get(Guid id) =>
            await categoryService.Get(id);

        [HttpPost]
        public async Task<Category> Post(Category category) =>
            await categoryService.Save(category);

        [HttpDelete]
        public async Task<Category> Delete(Category category) =>
            await categoryService.Delete(category);
    }
}