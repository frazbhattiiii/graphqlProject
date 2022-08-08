require("dotenv").config();
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const PORT = process.env.PORT || 5000;
const schema = require('./Schema/schema');
const connectDB = require ( "./Config/db" );
const app = express();

app.use('/graphql', graphqlHTTP({
schema,
graphiql: process.env.NODE_ENV === 'development'
}))
connectDB();
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

