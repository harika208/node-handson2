var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/",(req,res)=>{
  res.send("Im home page");
  res.end();
})

router.get("/gallery",(req,res)=>{
  res.send("I'm on gallery");
  res.end();
})
router.post("/submit",(req,res)=>{
  res.send("post worked");
  res.end();
})  


module.exports = router;
