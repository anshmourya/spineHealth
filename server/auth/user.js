const express = require('express')
const router = express.Router()
const passport = require('./passport')
const session = require('express-session')

// Use cookieSession middleware

router.use(
  session({
    secret: process.env.COOKIE_PRIVATE_KEY,
    resave: false,
    saveUninitialized: true,
    proxy: true,
    name: 'auth-id',
    cookie: {
      // secure: true,
      // httpOnly: false,
      // sameSite: "none",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    },
  }),
)

// Use passport middleware
router.use(passport.initialize())
router.use(passport.session())

const isLoggedIn = (req, res, next) => {
  console.log('isLoggedIn')
  req.user ? next() : res.sendStatus(401)
}
router.get('/success', isLoggedIn, (req, res) => {
  console.log(req.user)
  if (req.user) {
    res.status(200).json({
      error: false,
      message: 'authorized',
      user: req.user,
    })
  } else {
    res.status(401).json({
      error: true,
      message: 'unauthorized',
    })
  }
})

// Login route
router.post(
  '/login',
  passport.authenticate('local', { session: true }),
  (req, res) => {
    res.status(200).send('Welcome to the SpineHealth')
  },
)

// Logout route
router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.error('Error destroying session:', error)
    } else {
      req.logOut()
      res.send('logOut')
    }
  })
})

module.exports = router
