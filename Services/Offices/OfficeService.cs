using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using OrderManagement.Types.Offices;

namespace OrderManagement.Services.Offices
{
    public class OfficeService
    {
        private readonly IOfficeRepository officeRepository;

        public OfficeService(IOfficeRepository officeRepository) {
            this.officeRepository = officeRepository;
        }

        public async Task<IEnumerable<Office>> Get() =>
            await officeRepository.Get();

        public async Task<Office?> Get(Guid id) =>
            await officeRepository.Get(id);

        public async Task<Office> Save(Office office) =>
            await officeRepository.Save(office);
        
        public async Task<Office> Delete(Office office) =>
            await officeRepository.Delete(office);
    }
}
