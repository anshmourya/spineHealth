const express = require('express');
const router = express.Router();
const passport = require("./passport");
const cookieSession = require('cookie-session');

// Use cookieSession middleware
router.use(cookieSession({
    name: 'auth-data',
    keys: [process.env.COOKIE_PRIVATE_KEY],
    sameSite: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    resave: false,
    saveUninitialized: false,
    secure: true
}));

// Use passport middleware
router.use(passport.initialize());
router.use(passport.session());

const isLoggedIn = (req, res, next) => {
    console.log("isLoggedIn");
    req.user ? next() : res.sendStatus(401)

}
router.get("/success", isLoggedIn, (req, res) => {
    console.log(req.user);
    if (req.user) {
        res.status(200).json({
            error: false,
            message: "authorized",
            user: req.user
        });
    } else {
        res.status(401).json({
            error: true,
            message: "unauthorized"
        });
    }
});

// Login route
router.post("/login", passport.authenticate("local", { 'session': true, }), (req, res) => {
    res.status(200).send("Welcome to the SpineHealth");
});

// Logout route
router.get("/logout", (req, res) => {
    req.session = null
    req.logOut();
    res.send("logOut");
});

module.exports = router;
