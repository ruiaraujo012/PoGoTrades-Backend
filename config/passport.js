const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");
const { User } = require("../models/index");

const SALT_ROUNDS = 10;

/*
 * Passport middleware to handle with user signup
 */
passport.use(
  "signup",
  new localStrategy(async (username, password, done) => {
    try {
      const userExist = await User.findOne({
        where: {
          Username: username
        }
      });

      if (userExist && userExist.PasswordHash !== null) {
        return done(null, false, `The user ${username} already exists.`);
      } else {
        // const userData = req.body.data;
        // const passwordHash = await createHash(userData.password);
        const passwordHash = await createHash(password);

        // userData.password = passwordHash;

        if (userExist) {
          const updatedUser = await User.update(
            { PasswordHash: passwordHash },
            {
              where: {
                Username: username
              }
            }
          );

          return done(
            null,
            updatedUser,
            `User ${username} created successfully.`
          );
        } else {
          const newUser = await User.create({
            Username: username,
            PasswordHash: passwordHash
          });

          return done(null, newUser, `User ${username} created successfully.`);
        }
      }
    } catch (err) {
      return done(err, false, null);
    }
  })
);

/*
 * Passport middleware para lidar com o login de utilizadores
 */
passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({
          email: email
        });

        const valid = await isValidPassword(user, password);

        if (!user || !valid) {
          return done(null, false, {
            message: "Utilizador ou password inválido!"
          });
        }

        return done(null, user, {
          message: "Login realizado com sucesso."
        });
      } catch (err) {
        const user = await User.findOne({
          email: email
        });

        if (!user) {
          return done(null, false, {
            message: "Utilizador ou password inválido!"
          });
        }

        return done(err);
      }
    }
  )
);

/*
 * Verifica e valida o token enviado pelo utilizador
 */
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "secret", // FIXME: Change in future
      expiresIn: "1h"
    },
    async (decodedToken, done) => {
      try {
        return done(null, decodedToken.user);
      } catch (err) {
        done(err);
      }
    }
  )
);

/*
 * Gerar hash da password
 */
createHash = password => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

/*
 * Verifica o hash das passwords
 */
isValidPassword = (user, password) => {
  return bcrypt.compare(password, user.password);
};
