import express from "express";
import allRoutes from "./routes";
const app = express()


app.use('/v1', allRoutes);

app.listen(3000, () => {
    console.log('Server is up on 3000')
})