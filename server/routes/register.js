import express from "express";
import User from "../models/User.js";
import { writeToCSV} from "../utils/writeToCSV.js";  

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const userData = req.body;
    console.log("Received user data:", userData); 

    const user = new User(userData);
    await user.save();

    await writeToCSV(user.toObject());
 
    console.log("✅ Finished writing Excel file. Check if row added.");

    res.status(200).json({ message: "User registered successfully." });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Registration failed." });
  }
});



export default router;
