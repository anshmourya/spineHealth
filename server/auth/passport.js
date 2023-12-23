const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const { user } = require('../database/firebaseConfig')

passport.use(
  new localStrategy(async (username, password, done) => {
    console.log(username, password)

    try {
      const userSnapshot = await user.doc(username).get()
      if (!userSnapshot.exists) {
        return done(null, false)
      }

      const userData = userSnapshot.data()
      const validatedUser = userData.password === password

      if (!validatedUser) {
        return done(null, false)
      }

      return done(null, userData)
    } catch (error) {
      return done(error)
    }
  }),
)

passport.serializeUser((userObj, done) => {
  console.log('serializeUser')
  done(null, userObj.id)
})

passport.deserializeUser((userObj, done) => {
  console.log('deserializeUser')
  done(null, userObj)
})

module.exports = passport
