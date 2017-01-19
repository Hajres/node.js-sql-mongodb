
/*const express = require("express");
const router = express.Router();



router

  .get("/", (req, res) =>{
    res.send("hi")
    
  })

  .get("/:id", (req, res) =>{
    const { id } = req.params;
    const user = users.find( user => user.id == id);
    if(user){
      res.send(user);
    } else {
      res.status(404).send(`user ${id} doesn't exist!`);
    }

    })

    .delete("/:id", (req, res) => {
      const { id } = req.params;
      const index = users.findIndex( user => user.id == id);
      if(index > -1) {
        users.splice(index, 1);
        res.sendStatus(200);
      } else{
         res.status(404).send(`user ${id} doesn't exist!`);

      }
    })


  module.exports = router;



  var users = [{
  "id" : 1,
  "first_name" : "Helen",
  "last_name" : "Baker",
  "email" : "hbaker0@slashdot.org",
  "gender" : "Female",
  "ip_address" : "185.91.153.109"
}, {
  "id" : 2,
  "first_name" : "George",
  "last_name" : "Larson",
  "email" : "glarson1@jugem.jp",
  "gender" : "Male",
  "ip_address" : "249.112.195.31"
}, {
  "id" : 3,
  "first_name" : "Harold",
  "last_name" : "Alexander",
  "email" : "halexander2@icio.us",
  "gender" : "Male",
  "ip_address" : "147.49.185.181"
}, {
  "id" : 4,
  "first_name" : "Kelly",
  "last_name" : "Montgomery",
  "email" : "kmontgomery3@zimbio.com",
  "gender" : "Female",
  "ip_address" : "208.245.170.47"
}, {
  "id" : 5,
  "first_name" : "Earl",
  "last_name" : "Murphy",
  "email" : "emurphy4@tinyurl.com",
  "gender" : "Male",
  "ip_address" : "81.167.93.83"
}, {
  "id" : 6,
  "first_name" : "Sean",
  "last_name" : "Long",
  "email" : "slong5@cdc.gov",
  "gender" : "Male",
  "ip_address" : "187.111.65.38"
}, {
  "id" : 7,
  "first_name" : "Laura",
  "last_name" : "Mason",
  "email" : "lmason6@imageshack.us",
  "gender" : "Female",
  "ip_address" : "105.121.97.115"
}, {
  "id" : 8,
  "first_name" : "Brenda",
  "last_name" : "Cruz",
  "email" : "bcruz7@ox.ac.uk",
  "gender" : "Female",
  "ip_address" : "85.243.208.0"
}, {
  "id" : 9,
  "first_name" : "Kevin",
  "last_name" : "Black",
  "email" : "kblack8@vk.com",
  "gender" : "Male",
  "ip_address" : "139.79.29.151"
}, {
  "id" : 10,
  "first_name" : "Norma",
  "last_name" : "Riley",
  "email" : "nriley9@istockphoto.com",
  "gender" : "Female",
  "ip_address" : "86.51.87.235"
}] */