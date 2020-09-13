const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");

const { createHash } = require("../utils/password");

const { User } = require("../models/index");
const Users = require("../controllers/v1/user");

/**
 * Passport middleware to handle with user signup
 */
passport.use(
  "signup",
  new localStrategy(
    {
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const email = req.body.email;
      let userExist = null;

      try {
        await Users.checkUsernameExists(username, (err, data) => {
          if (err) throw err;
          else userExist = data;
        });
      } catch (err) {
        return done(err, false);
      }

      // try {
      //   const emailExist = await Users.getEmail(email);

      //   if (emailExist) return;
      // } catch (err) {
      //   return done(err, false, { message: "Internal error" });
      // }

      try {
        if (!userExist.user) {
          const passwordHash = await createHash(password);

          const newUser = await Users.insertOne({
            username: username,
            passwordHash: passwordHash,
            email: email,
          });

          return done(null, newUser, {
            message: `User ${username} created successfully.`,
          });
        } else {
          if (userExist.password) {
            return done(null, false, {
              message: `The user ${username} already exists.`,
            });
          } else {
            const updatedUser = await Users.createUserAccount({
              username: username,
              password: password,
              email: email,
            });
            return done(null, updatedUser, {
              message: `User ${username} created successfully.`,
            });
          }
        }
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

/**
 * Passport middleware to handle with user login
 */
passport.use(
  "login",
  new localStrategy(async (username, password, done) => {
    try {
      let userExist = await User.findOne({
        limit: 1,
        where: {
          username: username,
        },
      });

      if (!userExist) {
        return done(null, false, { message: "Username or password invalid!" });
      } else {
        userExist = userExist.dataValues;
        const valid = await isValidPassword(password, userExist.passwordHash);

        if (!valid) {
          return done(null, false, {
            message: "Username or password invalid!",
          });
        }
      }

      return done(null, userExist, { message: "Login successful!" });
    } catch (err) {
      let userExist = await User.findOne({
        limit: 1,
        where: {
          username: username,
        },
      });

      console.log("userExist :", userExist);
      return done(err, false, { message: "Internal error" });
    }
  })
);

/**
 * Checks and validates the token sent by the user
 */
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
      expiresIn: "1h",
    },
    async (decodedToken, done) => {
      try {
        return done(null, decodedToken);
      } catch (err) {
        done(err);
      }
    }
  )
);

/**
 * Check the password hash
 */
isValidPassword = (password, userPassword) => {
  return bcrypt.compare(password, userPassword);
};
