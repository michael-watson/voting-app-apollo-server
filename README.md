# GraphQL API

This is a GraphQL endpoint calling two existing REST api endpoints

You can explore the endpoint we'll build at [https://apollo-voting-app.azurewebsites.net/api/graphiql](https://apollo-voting-app.azurewebsites.net/api/graphql)

## Steps

If you haven't already, make sure to clone this repository.

1. ⚠️ Navigate to the *graphql-api* folder and open it in a *new instance* of VS Code

2. Install dependencies

```
npm install
```

1. Go to *Debug* panel in VS Code and click run

2. Make a query against your GraphQL server running locally
    * **Using GraphQL Playground**, open up [http://localhost:7071/api/graphql](http://localhost:7071/api/graphql)] in your browser and make the following query:

    ```
    query {
        teams{
            id
            name
            points
        }
    }
    ```
    * **Using [Postman](https://www.getpostman.com/)** (or any Rest client) make a POST request to your GraphQL endpoint running in your local [http://localhost:7071/api/graphql](http://localhost:7071/api/graphql) with this body of type *application/json*:

    ```json
    { "query": "{teams{id name points}}"}
    ```

3. If you have deployed your previous services to Azure, replace the URLs in index.js with your own

4. Run the function again and make sure you get the correct data back (coming from your own DB instance)

5. To deploy your function using VS Code go to the Azure Functions extension. Click the blue arrow button and follow prompt instructions to either create a new function or deploy to an existing one