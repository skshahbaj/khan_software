import { login, allData, oneupdate, update, deletedata, paramsdelete, signup } from "../controller/user.controller.js"
import Express from "express"
import { auth } from "../middleware/authentication.js"

export const route = Express.Router();

route.route("/signup").get(signup);
route.route("/login").post(login);
route.route("/all_data").get(allData);
route.route("/oneupdate/:mobile/:username").put(oneupdate);
route.route("/update").put(update);
route.route("/delete").delete(deletedata);
route.route("/onedelete/:email").delete(paramsdelete);





export default route;