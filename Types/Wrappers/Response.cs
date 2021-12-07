using System.Collections.Generic;

namespace OrderManagement.Types.Wrappers 
{
    public record Response<T>
        {
            public T ?Data { get; init; } = default(T);
            public bool Succeeded { get; init; } = true;
            public ICollection<string> ?Errors { get; init; } = null;
            public string ?Message { get; init; } = null;
        }
}
