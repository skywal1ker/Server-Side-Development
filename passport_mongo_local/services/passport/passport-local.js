import debug from 'debug';
import { Strategy } from 'passport-local';
import passport from 'passport';
import User from "../../model/user.model.js";

const DEBUG = debug('dev');

const authFields = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
};

passport.use(
  'login',
  new Strategy(authFields, async (req, email, password, cb) => {
    try {
        const user = await User.findOne({$or: [{email}, {userName: email}]});

        if (!user || !user.password) {
            return cb(null, false, { message: 'Incorrect email or password.'});
        }

        const checkPassword = await user.comparePassword(password);

        if (!checkPassword) {
            return cb(null, false, {message: 'Incorrect email or password.'});
        }

        return cb(null, user, {message: 'Logged In Successfully'});

    } catch (err) {
        console.log(err);
        return cb(null, false, {statusCode: 400, message: err.message});
    }
  }),
);

passport.use(
  'logout',
  new Strategy(authFields, async (req, email, password, cb) => {
    try {
        const user = await User.findOne({$or: [{email}, {userName: email}]});

        if (!user || !user.password) {
            return cb(null, false, { message: 'Incorrect email or password.'});
        }

        const checkPassword = await user.comparePassword(password);

        if (!checkPassword) {
            return cb(null, false, {message: 'Incorrect email or password.'});
        }

        return cb(null, user, {message: 'Logged Out Successfully'});

    } catch (err) {
        console.log(err);
        return cb(null, false, {statusCode: 400, message: err.message});
    }
  }),
);

passport.use(
    'signup',
    new Strategy(authFields, async (req, email, password, cb) => {
      try {
        const checkEmail = await User.checkExistingField('email', email);
  
        if (checkEmail) {
          return cb(null, false, {statusCode: 409, message: 'Email already registered, log in instead'});
        }
  
        const checkUserName = await User.checkExistingField('userName', req.body.userName);
        if (checkUserName) {
          return cb(null, false, {statusCode: 409, message: 'Username exists, please try another'});
        }
  
        const newUser = new User();
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.userName = req.body.userName;
        
        await newUser.save();
        return cb(null, newUser);

      } catch (err) {
          console.log(err);
          return cb(null, false, {statusCode: 400, message: err.message});
      }
    }),
  );

  export default passport;