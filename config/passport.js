const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");

const { User } = require("../models/index");

const SALT_ROUNDS = 10;

/**
 * Passport middleware to handle with user signup
 */
passport.use(
  "signup",
  new localStrategy(async (username, password, done) => {
    try {
      let userExist = await User.findOne({
        limit: 1,
        where: {
          username: username,
        },
      });

      if (!userExist) {
        const passwordHash = await createHash(password);

        const newUser = await User.create({
          username: username,
          passwordHash: passwordHash,
        });

        return done(null, newUser, `User ${username} created successfully.`);
      } else {
        userExist = userExist.dataValues;

        if (userExist.passwordHash) {
          return done(null, false, `The user ${username} already exists.`);
        } else {
          const passwordHash = await createHash(password);

          const updatedUser = await User.update(
            { passwordHash: passwordHash },
            {
              where: {
                username: username,
              },
            }
          );

          return done(
            null,
            updatedUser,
            `User ${username} created successfully.`
          );
        }
      }
    } catch (err) {
      return done(err, false, "Internal error");
    }
  })
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
        return done(null, false, "Username or password invalid!");
      } else {
        userExist = userExist.dataValues;
        const valid = await isValidPassword(password, userExist.passwordHash);

        if (!valid) {
          return done(null, false, "Username or password invalid!");
        }
      }

      return done(null, userExist, "Login successful!");
    } catch (err) {
      let userExist = await User.findOne({
        limit: 1,
        where: {
          username: username,
        },
      });

      console.log("userExist :", userExist);
      return done(err, false, "Internal error");
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
 * Generates the password hash
 */
createHash = password => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

/**
 * Check the password hash
 */
isValidPassword = (password, userPassword) => {
  return bcrypt.compare(password, userPassword);
};
