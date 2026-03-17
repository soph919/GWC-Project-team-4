import bcrypt from "bcrypt"
import User from "../models/User.js"

//Register
export async function register (req, res) {
    try {
        const {firstname, lastname, email, password} = req.body;

        //hash password before putting in database
        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:hashPassword
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } catch (error) {

        //For duplicate emails 
        if(error.code == 11000) {
            res.status(409).json({message:"This email is already used"})

        } else {

            console.error("Error in register:", error)
            res.status(500).json({message:"Internal Server Error"});
        }
    }
}


//Login
export async function login (req, res) {
    try {
        const { email, password } = req.body
        
        //Find user with email from req
        const user = await User.findOne().where("email").equals(email);
        
        const isValid = await bcrypt.compare(password, user?.password || "" );

        //If user does not exists or passwords don't match, send error
        if(!user || !isValid) {
            res.status(400).json({message:"Invalid email or password"});
        
        } else {
            res.status(200).json({message:"Login successful"});

        }
    
    } catch (error) {
        console.error("Error in login:", error)
        res.status(500).json({message:"Internal Server Error"});
    }
}


