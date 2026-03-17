import mongoose from "mongoose";
import projectSchema from "./Project.js";

const contentSchema = new mongoose.Schema({
     portfolio_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema',
        required: true
    },
    about: {
        type:String,
        required: true
    },
    contact: {
        type:String,
        required:true
    }
})

const Content = mongoose.model("Content", contentSchema);

export default Content