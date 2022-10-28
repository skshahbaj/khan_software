import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    Aadarcard_Number: {
        type: Number,
        require: true
    },
    pincard: {
        type: String,
        require: true
    },
    companyName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true
    },
    token: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})
const users = mongoose.model("users", UserSchema);
export default users