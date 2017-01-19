const express = require("express");
require("babel-register");
const staticAssets = __dirname + "/pubilc"
const favicon = require("serve-favicon");
const users = require("./routes/users.js");
const authRoutes = require("./routes/auth.js");
const postsRoutes = require("./routes/posts.js");
const faviconPath = __dirname + "/public/favicon.ico"
const bodyParser = require("body-parser");
const session = require("express-session");
const RedisStore = require('connect-redis')(session);
const cache = require("./cache")
const passport = require("passport");
//const db = require("./db");
require("./passport");
const mongo = require("./mongo")



const app = express();



app
.set("views", __dirname + "/views")
.set("view engine", "hjs")
.use(express.static(staticAssets))
.use(favicon(faviconPath))
.use(bodyParser.json())
.use(bodyParser.urlencoded({extended:false}))
.use(session({ 
  store: new RedisStore(),
  secret: "i love dogs",
  resave: false,
  saveUninitialized: false
   }))
.use(passport.initialize())
.use(passport.session())
.use(authRoutes)
.use(postsRoutes)

.get("/", (req , res , next) =>{
  mongo.db.collection("users")
  .find()
  .toArray((err, users) => {
      res.send(users)

   })
  })



.get("/create/:first_name/:last_name/:email/:password", (req , res , next) =>{
  mongo.db.collection("users")
  .insert(req.params, (err, result) => {
      res.send(result)

   })
  })



.get("/updateEmail/:email/:newEmail", (req , res , next) => {
  mongo.db.collection("users")
  .updateOne(
  {email: req.params.email},
  {$set:{email: req.params.newEmail}},
  (err, result) => {
      res.send(result)
  
   

   })
  })

// .get("/", cache.route({"expire": 5, prefix: "home"}), (req, res, next) => {
//     setTimeout(() => {
//       const headlines = [
//         "Fuschia is the New Black",
//         "What will the Pacific Ocean do Next?",
//         "Wall Street to Build Even More Walls",
//       ];

//       res.render("headlines", {
//         headlines: headlines
//       })
//     }, 2000)
  
//   })





 





 
  

// .get("/session", (req, res, next) => {
//   res.send(req.session)
//   })


// .get("/set", (req, res, next) => {
//   req.session.name = "hajris"
//     res.send(req.session)
//   })




// .get("/", (req, res, next) => {
//     db("users").then((users) => {
//       res.render("users", {
//         title: "All Users",
//         users,
//       })
//     }, next)
//   })


//  .get("/viewtweets/:user_id", (req, res, next) => {
//     const  user_id  = req.params.user_id

//     db("tweets")
//       .where("user_id", user_id)
//       .then((tweets) => {
//         res.render("tweets", {
//           title: "My Users Tweets",
//           tweets,
//         })
//       }, next)
//   })













/*.get("/tweets", (req , res) =>{
  db("tweets").then((tweets) => {
      res.send(tweets)
    })
  })
  

.get("/users", (req , res , next) =>{
  db("users").then((users) => {
      res.send(users)
    
    }, next)
  })

.post("/users", (req , res , next) =>{
  db("users")
  .insert(req.body)
  .then((userIds) => {
      res.send(userIds)
    }, next)
  })

.get("/users/:id", (req , res , next) =>{
  const id  = req.params.id;
  db("users")
  .where("id", id)
  .first()
  .then((users) => {
    if(!users){
      return res.send(400)
    }
      res.send(users)
    }, next)
  })



.put("/users/:id", (req , res , next) =>{
  const id  = req.params.id;
  db("users")
  .where("id", id)
  .update(req.body)
  .then((result) => {
      if(result === 0){
        return res.send(400)
      }
      res.send(200)

    }, next)
  })

.delete("/users/:id", (req , res , next) =>{
  const id  = req.params.id;
  db("users")
  .where("id", id)
  .delete()
  .then((result) => {
      if(result === 0){
        return res.send(400)
      }
      res.send(200)

    }, next)
  })




*/


  
	// var title = "still another title";
 //    var tweets = [
 //      "my first tweet",
 //      "other tweet",
 //      "yet another tweet",
 //    ];

	// res.render("index", {
 //      title: title,
 //      tweets: tweets,
 //      showTweets: true,
 //       partials: {header: "tweets", tweets: "tweets"},
 //    })


//;

app.listen(3000);

//console.log(_.snakeCase("SomeValue") )


