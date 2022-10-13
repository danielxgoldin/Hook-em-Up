const mongoose = require("mongoose");
const express = require("express");
const PORT = process.env.PORT || 3001;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();

// Allow cross-origin
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./hook-em-up/routes"));

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}) )

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Hook-em-up",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set("debug", true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));