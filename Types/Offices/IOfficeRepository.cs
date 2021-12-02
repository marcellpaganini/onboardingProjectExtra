using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OrderManagement.Types.Offices
{
    public interface IOfficeRepository
    {
        Task<IEnumerable<Office>> Get();
        Task<Office?> Get(Guid? id);
        Task<Office> Save(Office office);
        Task<Office> Delete(Office office);
    }
}