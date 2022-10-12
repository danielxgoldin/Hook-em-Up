/* const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const graphql = require("graphql");
const mongoose = require("mongoose");

const QueryRoot = new graphql.GraphQLObjectType({
  name: "Query",
  fields: () => ({
    hello: {
      type: graphql.GraphQLString,
      resolve: () => "Hello world!",
    },
  }),
});

const schema = new graphql.GraphQLSchema({ query: QueryRoot });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.get("/", function (req, res) {
  res.render("index", {});
});

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Hook-em-Up",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set("debug", true);

app.listen(PORT, () =>
  console.log(`Connected to localhost using PORT:${PORT}`)
); */

//known working server code from p-hunt

const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Hook-em-up",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set("debug", true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));