import portfolioRoutes from "./routes/PortfolioRoute.js";
import express from "express";
import dotenv from "dotenv";
import accountRoutes from "./routes/accountRoutes.js";
import { connectDB } from "./connect.js";
import User from "./models/User.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//connnect to mongoDB 
connectDB();
app.use(express.json());

app.use("/account", accountRoutes);
app.use("/portfolio", portfolioRoutes);


/*
app.get("/api/user", async (req,res) => {
   // res.status(200).send("Hello World");
   try {
     const user = await User.find();
     res.status(200).json(user)
   } catch(err) {
        console.error("Error", err);
        res.status(500).json({message:"Internal Server Error"});
   }
});*/

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});