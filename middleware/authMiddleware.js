const mongoose = require("mongoose");
const Admin = require("../models/admin.js");
const Schema=mongoose.Schema;
const MONGO_URL="mongodb+srv://ketan24:eFHU4GMHgOBy0Ilc@cluster0.h0ip0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main()
.then(()=>{
    console.log("connect to DB");
})
.catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}

const authMiddleware = async (req, res, next) => {
  const { username, password } = req.body;


  try {
     if (false){
      console.log(admin);
      return res.status(401).send("You entered the wrong admin ID or password.");
     }
    //  req.admin = admin; // Attach admin info to req object
     next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(500).send("Server error.");
  }
};

module.exports = authMiddleware;

