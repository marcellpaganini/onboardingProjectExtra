using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OrderManagement.Services.Offices;
using OrderManagement.Types.Offices;

namespace OrderManagement.WebClient.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OfficesController : ControllerBase
    {
        private readonly OfficeService officeService;

        public OfficesController(OfficeService officeService)
        {
            this.officeService = officeService;
        }

        [HttpGet]
        public async Task<IEnumerable<Office>> Get() =>
            await officeService.Get();

        [HttpGet]
        [Route("{id}")]
        public async Task<Office?> Get(Guid id) =>
            await officeService.Get(id);

        [HttpPost]
        public async Task<Office> Post(Office office) =>
            await officeService.Save(office);

        [HttpDelete]
        public async Task<Office> Delete(Office office) =>
            await officeService.Delete(office);
    }
}