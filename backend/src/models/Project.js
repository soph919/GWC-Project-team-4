import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    description: {
        type:String,
        required: true
    },
    link: {
        type:String,
        required: true
    }
});

const Project = mongoose.model("Project", projectSchema);

export default Project