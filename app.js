const express=require("express");
const app = express();
const mongoose=require("mongoose");
const path = require("path");
const ejsMate=require("ejs-mate");//require ejs-Mate for boilerplate




let port =8080;

app.set("view engine","ejs");
app.set("views" ,path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.engine("ejs",ejsMate);



app.get("/",(req,res)=>{
    res.send("hiii...i am root");

});
app.get("/home",(req,res)=>{
    res.render("./pages/home.ejs");
})




















app.listen(port,()=>{
    console.log(`server is listings on port ${port}`);

})