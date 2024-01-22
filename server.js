
const express =require("express");
const cors = require("cors");

const app = express();

var corsOptions= {
    origin : "http://localhost:8081"
}

app.use (cors(corsOptions));
app.use (express.json());
app.use (express.urlencoded({extended:true}));

//create  a route
app.get("/", (req, res)=>{
    res.json({message:"Welcome to SIBA Campus"});

});

// set port, listen for requests
const PORT =process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}.`);
});