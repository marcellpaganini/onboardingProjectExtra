public record PaginationFilter
{
    public int PageNumber { get; init; }
    public int PageSize { get; init; }
    public PaginationFilter()
    {
        this.PageNumber = 1;
        this.PageSize = 10;
    }
    public PaginationFilter(int pageNumber, int pageSize)
    {
        this.PageNumber = pageNumber < 1 ? 1 : pageNumber;
        this.PageSize = pageSize > 10 ? 10 : pageSize;
    }
}
