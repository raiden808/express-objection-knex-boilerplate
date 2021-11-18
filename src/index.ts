import express from "express";
import allRoutes from "./routes";
var bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));

// parse application/json
app.use(bodyParser.json())


app.use('/v1', allRoutes);



app.listen(3000, () => {
    console.log('Server is up on 3000')
})