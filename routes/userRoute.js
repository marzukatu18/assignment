import express from "express";
import { getAllUser,createUser } from "../controller/userController.js";

const route =express.Router();

route.route('/').get(getAllUser).post(createUser);




export const userRoute=route;