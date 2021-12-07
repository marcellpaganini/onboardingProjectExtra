namespace OrderManagement.Types.Wrappers 
{
    public record Response<T>
        {
            public Response()
            {
            }
            public Response(T data)
            {
                Succeeded = true;
                Message = string.Empty;
                Errors = null;
                Data = data;
            }
            public T ?Data { get; init; }
            public bool Succeeded { get; init; }
            public string[] ?Errors { get; init; }
            public string ?Message { get; init; }
        }
}
