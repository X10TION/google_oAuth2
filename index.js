const express = require('express')
const passport = require('passport')
const session = require("express-session")
require('./config/auth')

function isLoggedIn(req,res, next){
    req.user  ? next() : res.sendStatus(401)
}

const app = express()
app.use(session({ secret: "these should be secret"}))
app.use(passport.initialize())
app.use(passport.session())
app.get('/', (req,res) => {
    res.send("<h1>Google Authentication [oAuth2]<br /><a href='/auth/google'>Authenticate with Google</a></a></h1>")
})

app.get('/auth/google', 
    passport.authenticate('google', {scope:['email', 'profile']})    
)
app.get('/google/home',
    passport.authenticate( 'google', { successRedirect: '/protect',
    failureRedirect: '/login',
})
)

app.get('/protect', isLoggedIn, (req,res) => {
    res.send("Wecome on board")
})
app.get('/login', (req,res) =>{
    res.send("Please Login ")
})

app.listen(5000, () => console.log("listen to Port"))
