## Create a query

### Define Cosmos SDK messages

`ignite scaffold query hello --response text`{{execute}}

The following changes are done:
- modify proto/hello/query.proto,
- modify x/hello/client/cli/query.go,
- create x/hello/client/cli/query_hello.go,
- create x/hello/keeper/grpc_query_hello.go.

Add to git these changes:

`git add .`{{execute}}

`git commit -am "Scaffolded a hello query with Ignite CLI"`{{execute}}

### Define and register queries

Edit the file `proto/hello/query.proto`{{open}}

Add this code:

```
service Query {
    rpc Hello(QueryHelloRequest) returns (QueryHelloResponse) {
        option (google.api.http).get = "/hello/hello/hello";
    }
}
```{{copy}}

`Query` defines the query.

`QueryHelloRequest` is the request. It accepts request parameters. `message QueryHelloRequest` is empty because there is no parameter.

`QueryHelloResponse` is the response of the query. `message QueryHelloResponse` includes a argument.

`option` defines the gRPC endpoint.

### Define message handler logic

Edit the file `x/hello/keeper/grpc_query_hello.go`{{open}}.

Add this code:

```
func (k Keeper) Hello(goCtx context.Context, req *types.QueryHelloRequest) (*types.QueryHelloResponse, error) {
    if req == nil {
        return nil, status.Error(codes.InvalidArgument, "invalid request")
    }
    ctx := sdk.UnwrapSDKContext(goCtx)
    _ = ctx
    return &types.QueryHelloResponse{}, nil
}
```{{copy}}

The function `Hello`:
- checks on the request: it throws an error if the request is nil,
- stores context of the request in the `ctx` variable,
- returns a response.
