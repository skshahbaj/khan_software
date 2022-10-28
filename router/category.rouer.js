import { category, categoryLogin } from "../controller/category.controller.js";

import Express from "express";
export const detali = Express.Router();

detali.route("/test/category").get(category);
detali.route("/test/categorylogin").get(categoryLogin);
// detali.route("/test/update").put(updateCate);
// detali.route("/test/delete").delete(deleteCate);


export default detali

