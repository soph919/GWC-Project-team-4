import mongoose from "mongoose";


const portfolioSchema = new mongoose.Schema({
    user_info: {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        },
        first_name:{
            type:String
        },
        last_name:{
            type:String
        }
    },
    portfolio_name: {
        type:String,
        required:true
    },
    template_type: {
        type:String,
        required:true
    },
    visibility: {
        type:Boolean,
        default:true
    }, 
    description: {
         type:String,
        required:true
    },
    image: {
        public_id: {
            type:String,
        }, 
        secure_url: {
            type:String
        }
    }
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio