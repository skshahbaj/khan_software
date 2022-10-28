import mongoose from "mongoose";

export const connect = async () => {
    const con = await mongoose.connect("mongodb://localhost:27017/shah")
    console.log("khan----", con.connection.host);

}
export default connect;