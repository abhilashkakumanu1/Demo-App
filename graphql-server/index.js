const express = require("express");

const resolvers = require("./resolvers");
const schema = require("./schema");

const { graphqlHTTP } = require("express-graphql");

const app = express();

app.get("/", (req, res) => {
  res.send("Working bro!");
});

const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = 9000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
