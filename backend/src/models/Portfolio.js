import mongoose from "mongoose";


const portfolioSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    portfolio_name: {
        type:String,
        required:true
    },
    template_type: {
        string:String,
        required:true
    },
    visibility: {
        type:Boolean,
        default:true
    }
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio