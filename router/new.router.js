import { login,   update, deletedata, signup, resendOTP } from "../controller/user.controller.js"
import Express from "express"
import { auth } from "../middleware/authentication.js"

export const route = Express.Router();

route.route("/signup").get(signup);
route.route("/login").post(login);
// route.route("/all_data").get(allData);
// route.route("/oneupdate").put(oneupdate);
route.route("/update").put(update);
route.route("/delete").delete(deletedata);
// route.route("/onedelete").delete(paramsdelete);
route.route("/test/otp").post(resendOTP)





export default route;