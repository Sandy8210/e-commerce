import express from "express";
import {
  loginUser,
  registerUser,
  test,
} from "../controller/commonController.js";

const commonRouter = express.Router();

commonRouter.get("/", test);
commonRouter.post("/usersignup", registerUser);
commonRouter.post("/usersignin", loginUser);

export default commonRouter;
