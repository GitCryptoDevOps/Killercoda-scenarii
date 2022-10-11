### Implement the logic of these queries and message handlers in keeper functions

You can see that in the `query.proto`{{open}} file, the response accepts `text`.

Edit the `x/hello/keeper/grpc_query_hello.go`{{execute}} file.

Change the returned value with:

```
return &types.QueryHelloResponse{Text: "Hello, Ignite CLI!"}, nil
```{{copy}}

In the browser, visit http://localhost:1317/hello/hello/hello.

Now, registry the query handlers:
- Edit the `x/hello/module.go`{{open}} file.
- In the `import` section, add the import of `"context"`.
- Search `RegisterGRPCGatewayRoutes`.
- Register the query handlers:

```
func (AppModuleBasic) RegisterGRPCGatewayRoutes(clientCtx client.Context, mux *runtime.ServeMux) {
    types.RegisterQueryHandlerClient(context.Background(), mux, types.NewQueryClient(clientCtx))
}
```{{copy}}

Visit again the address http://localhost:1317/hello/hello/hello.

A query has been added in the CLI: `cat x/hello/client/cli/query_hello.go`{{open}}.

To query the request `hello`:

`hellod q hello hello`{{execute}}
