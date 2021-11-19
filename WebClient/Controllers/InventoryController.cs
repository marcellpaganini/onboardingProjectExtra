using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OrderManagement.Services.Inventory;
using OrderManagement.Types.Inventory;

namespace OrderManagement.WebClient.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InventoryController : ControllerBase
    {
        private readonly InventoryService inventoryService;

        public InventoryController(InventoryService inventoryService)
        {
            this.inventoryService = inventoryService;
        }

        [HttpGet]
        public async Task<IEnumerable<InventoryItem>> Get() =>
            await inventoryService.Get();

        [HttpGet]
        [Route("{id}")]
        public async Task<InventoryItem?> Get(Guid id) =>
            await inventoryService.Get(id);

        [HttpPost]
        public async Task<InventoryItem> Post(InventoryItem item) =>
            await inventoryService.Save(item);
    }
}