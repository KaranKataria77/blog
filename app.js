var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var passport = require('passport');
var localStrategy = require('passport-local');
var axios = require("axios");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const KEY = "AIzaSyCcDXGq4UB1escxfta6lRH062ToOKj01mA";

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/BlogMe', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to Db"))
.catch(error => console.log(error.message))
mongoose.set('useFindAndModify', false);

var User = require('./models/user');
var Blog = require('./models/blog');
var Comment = require('./models/comment');



app.use(require('express-session')({
    secret: "this is Blogme session",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.get("/post", (req, res) => {
    res.render("main/post.ejs")
})

app.get('/result', async function(req, res){
    const { search } = req.params
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
        params:{
            q: { search } ,
            part: "snippet",
            maxResults: 32,
            key: KEY,
        }
    })
    .catch(err => console.log(err))

    res.render("main/eg.ejs", { response: response})
})

app.get("/", function(req,res){
    Blog.find({}, (err, allBlog) => {
        if(err){
            console.log("not showing")
        }else{
            res.render("main/index.ejs", {blog: allBlog, currentUser: req.user})
        }
    })
})

app.get("/signup", (req, res) => {
    res.render("main/signup.ejs")
})

app.post("/signup", (req, res) => {
    req.body.username;
    req.body.password;
    User.register( new User({ username: req.body.username }), req.body.password, (err, user) => {
        if(err){
            console.log(err)
        }else{
            passport.authenticate("local")(req, res, function(){
                res.redirect("/")
            })
        }
    })
})

app.get("/login", (req, res)=> {
    res.render("main/login.ejs")
})

app.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
}), function(req, res){})

app.get("/blog",isLoggedIn, (req, res) => {
    res.render("main/blog.ejs")
})

app.post("/blog", (req, res) => {
    Blog.create( new Blog ({ title: req.body.title, blog: req.body.blog}), (err, blog) => {
        if(err){
            console.log(err)
        }else{
            blog.author.id = req.user._id
            blog.author.username = req.user.username
            blog.save()
            res.redirect("/")
        }
    })
})

app.get("/blog/:id", (req, res) => {
    Blog.findById(req.params.id).populate("comments").exec(function(err, foundBlog){
        if(err){
            console.log(err)
        }else{
            res.render("main/show.ejs", {blog: foundBlog})
        }
    })
})

app.get("/blog/:id/comment", (req,res) => {
    Blog.findById(req.params.id, (err, blog) => {
        if(err){
            console.log(err)
        }else{
            res.render("main/comment.ejs", {blog: blog})
        }
    })
})

app.post("/blog/:id/comment", (req, res) => {
    Blog.findById(req.params.id, (err, blog) => {
        if(err){
            console.log(err)
        }else{
            Comment.create(req.body.comment, (err, comment) => {
            if(err){
                console.log(err)
            }else{
            comment.author.id = req.user._id
            comment.author.username = req.user.username
            comment.save();
            blog.comments.push(comment)
            blog.save()
            res.redirect("/")
            }
            })
        }
    })
})

app.get("/logout", (req, res) => {
    req.logout()
    res.redirect("/")
})


function isLoggedIn (req , res, next) {
    if(req.isAuthenticated()){
        return next();
    }else{
        res.redirect('/login')
    }
}



app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("server has started");
})