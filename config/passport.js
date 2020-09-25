const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");

const { User } = require("../models/index");
const Users = require("../controllers/v1/user");

const { Conflict } = require("../http/error");

const { mappedSequelizeErrors } = require("../http/helpers");
const { createHash } = require("../utils/password");

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
        const user = await User.findOne({
          where: {
            username: username,
          },
          attributes: ["username", "passwordHash"],
        });
        userExist = user;
      } catch (err) {
        if (err.errors) return done(mappedSequelizeErrors(err.errors), false);
        return done(err, false);
      }

      try {
        const emailExist = await User.findOne({
          where: { email: email },
          attributes: ["email"],
        });

        console.log("emailExist", emailExist);

        if (emailExist) throw new Conflict("Email already in use.");
      } catch (err) {
        if (err.errors) return done(mappedSequelizeErrors(err.errors), false);
        return done(err, false);
      }

      try {
        console.log("userExist", userExist);
        let currentUsername, currentPasswordHash;

        const newPasswordHash = await createHash(password);

        if (userExist) {
          currentUsername = userExist.dataValues.username;
          currentPasswordHash = userExist.dataValues.passwordHash;
        } else {
          currentUsername = null;
          currentPasswordHash = null;
        }

        if (currentUsername && currentPasswordHash) {
          throw new Conflict(
            `User with username ${currentUsername} alreary exist. Try login.`
          );
        } else if (currentUsername && !currentPasswordHash) {
          const updatedUser = User.update(
            { passwordHash: newPasswordHash },
            {
              where: {
                username: username,
              },
            }
          );

          console.log("updatedUser", updatedUser);
          return done(null, updatedUser);
        } else {
          const createdUser = await User.create({
            username: username,
            passwordHash: newPasswordHash,
            email: email,
          });

          console.log("createdUser", createdUser);

          return done(
            null,
            createdUser,
            `User ${username} created successfully.`
          );
        }
      } catch (err) {
        console.log("err", err);
        if (err.errors) return done(mappedSequelizeErrors(err.errors), false);

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
