using System;
using OrderManagement.Types.Wrappers;

public record PagedResponse<T> : Response<T>
{
    public int PageNumber { get; init; }
    public int PageSize { get; init; }
    public Uri FirstPage { get; init; }
    public Uri LastPage { get; init; }
    public int TotalPages { get; init; }
    public int TotalRecords { get; init; }
    public Uri NextPage { get; init; }
    public Uri PreviousPage { get; init; }

    public PagedResponse(T data, int pageNumber, int pageSize)
    {
        this.PageNumber = pageNumber;
        this.PageSize = pageSize;
        this.Data = data;
        this.Message = null;
        this.Succeeded = true;
        this.Errors = null;
    }
}