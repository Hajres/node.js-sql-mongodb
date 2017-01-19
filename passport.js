
const db = require("./db")
const bcrypt = require("bcrypt-nodejs")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const GitHubStrategy = require("passport-github2").Strategy;

passport.use(new LocalStrategy(authenticate))
passport.use("local-register", new LocalStrategy({passReqToCallback: true}, register))
passport.use(new GitHubStrategy({
    clientID: "e77167df8928de668e39",
    clientSecret: "33704e46c061a5f02fb669466698d4d3a7daa53a",
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   db("users")
   .where("oauth_provider", "github")
   .where("oauth_id", "profile.username")
   .first()
   .then((user)=>{
    if(user){
      return done(null, user)
    }

    const newUser = {
      oauth_provider: "github", 
      oauth_id: "profile.username"
    }

    return db("users")
    .insert(newUser)
    .then((ids)=>{
      newUser.id = ids[0]
      done(null, newUser)
    })

   })
  }
))


function authenticate(email, password, done){
  db("users")
    .where("email", email)
    .first()
    .then((user) => {
      if (!user ||  !bcrypt.compareSync(password, user.password)) {
        return done(null, false, {message: "invalid user and password combination"})
      }

      done(null, user)
    }, done)
}


function register(req, email, password, done) {
  db("users")
    .where("email", email)
    .first()
    .then((user) => {
      if (user) {
        return done(null, false, {message: "an account with that email has already been created"})
      }
      if (password !== req.body.password2) {
        return done(null, false, {message: "passwords don't match"})
      }

      const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: email,
        password: bcrypt.hashSync(password)
      };

      db("users")
        .insert(newUser)
        .then((ids) => {
          newUser.id = ids[0]
          done(null, newUser)
        })
    })
}


passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  db("users")
    .where("id", id)
    .first()
    .then((user) => {
      done(null, user)
    }, done)
})