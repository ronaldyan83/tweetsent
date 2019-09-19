var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    cookieParser = require("cookie-parser"),
    LocalStrategy = require("passport-local"),
    flash        = require("connect-flash"),
    User        = require("./models/user"),
    session = require("express-session"),
    methodOverride = require("method-override");

//require('dotenv').config()


// configure dotenv
//require('dotenv').load();

//requiring routes
    indexRoutes      = require("./routes/index")
    searchRoutes     = require("./routes/search")


// assign mongoose promise library and connect to database
mongoose.Promise = global.Promise;

const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost/tweetsent';

mongoose.connect(databaseUri, { useMongoClient: true })
      .then(() => console.log(`Database connected to `+ process.env.MONGODB_URI))
      .catch(err => console.log(`Database connection error: ${err.message}`));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));

app.use('/jcloud', express.static(__dirname + '/node_modules/jqcloud2/dist/'));

//require moment
app.locals.moment = require('moment');

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "This is my life and is my only love",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.success = req.flash('success');
   res.locals.error = req.flash('error');
   next();
});


app.use("/", indexRoutes);
app.use("/search", searchRoutes)

//Server start configuration
app.listen(3000, process.env.IP, function(){
   console.log("The TweetSent Server Has Started!");
   console.log(process.env.PORT);
   console.log(process.env.IP);

});
