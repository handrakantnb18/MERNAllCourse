
const express = require("express");
const router = express.Router();

const app = express();

// router.get("/home1", function(request, response, next){
//     response.status(200).json("GET method is working");
//     next();
// });

function middleware (req, res, next) {
  // res.status(200).send('Request Type:', req.body);
  res.status(200).json(req.body);
  res.status(200).json(req.headers);
  next();
}

router.post("/home1", function(request, response){
    response.status(200).json(request.body);
    console.log("good...!!!")
    //response.json(request.headers)
});

router.use( () => {
    console.log("This method is working", middleware)
});

module.exports = router;

// function middleware (){
//     router.get("/home1", function(request, response, next){
//         response.status(200).json(request.body);
//         next();
//     });
// }

