# GraphQL

GraphQL is just a spec on top of HTTP. It's just like REST, it just says how to format the requests. In REST we have to call API many more times and also we get a bunch of information we don't need.

## What are we doing here?

In this demo, we will look at what graphql is, how to create schema, input types, queries, and mutation. We also will look at resolvers.
We are using the `express-graphql` module - this sets up an endpoint "/graphql". **So, graphql is just an endpoint on the server**. On this endpoint we can use this special query language (called graphql). `express-graphql` also provides us with this playground - `graphiql` to play with! We can look up the API docs directly here.

So, in short, graphql changes a lot of backends code, as we are accustomed to the old REST way of writing it. But, graphql makes a frontend developer's life enjoyable!

1. They don't have to make serval queries to get one thing
2. Can get _just_ what they want
3. Don't have to lookup for docs elsewhere! They can come to play in the playground graphql comes with.
