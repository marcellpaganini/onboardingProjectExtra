using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OrderManagement.Types.Offices;

namespace OrderManagement.Data.Offices
{
    public class OfficeRepository : IOfficeRepository
    {
        private readonly AppDbContext context;

        public OfficeRepository(AppDbContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Office>> Get() =>
            await context.Set<Office>()
                .ToListAsync();

        public async Task<Office?> Get(Guid? id) =>
            await context.Set<Office>()
                .FirstOrDefaultAsync(r => r.Id == id);
        public async Task<Office> Save(Office office)
        {
            if(office.Id == null) {
                context.Add(office);
            } else {
                context.Update(office);
            }

            await context.SaveChangesAsync();

            return office;
        }

        public async Task<Office> Delete(Office office)
        {
            context.Remove(office);
            await context.SaveChangesAsync();
            return office;
        }
    }
}
