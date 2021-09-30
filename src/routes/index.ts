import express from "express";
import todoRouter from "./todo.routes";

const allRoutes = express.Router();

const defaultRoutes = [
    {
        path: '/todo',
        route: todoRouter,
    },
];

defaultRoutes.forEach((route) => {
    allRoutes.use(route.path, route.route);
});

export default allRoutes;