const User = require("../models/User");
const crypto = require("crypto");
const { userNotFoundResponse, userSignedUpResponse, userSignedOutResponse } = require("../config/responses");
const bcryptjs = require("bcryptjs");
const { errorMessage } = require("../utils/utils");
const accountVerificationEmail = require("../config/accountVerificationEmail");

const controller = {
  register: async (req, res, next) => {
    let { name, lastName, role, photo, age, email, password } = req.body;
    let verified = false;
    let logged = false;
    let code = crypto.randomBytes(10).toString("hex");
    password = bcryptjs.hashSync(password, 10);

    try {
      await User.create({
        name,
        lastName,
        role,
        photo,
        age,
        email,
        password,
        verified,
        logged,
        code,
      });
      accountVerificationEmail(email, code);
      return userSignedUpResponse(req, res);
    } catch (error) {
      errorMessage(res, 400, error.message);
    }
  },

  verify: async (req, res, next) => {
    const { code } = req.params;
    try {
      let user = await User.findOneAndUpdate({ code }, { verified: true }, { new: true });
      if (user) {
        return res.redirect(process.env.FRONT_URL + "/signin");
      } else {
        return userNotFoundResponse(req, res);
      }
    } catch (error) {
      errorMessage(res, 400, error.message);
    }
  },

  exit: async (req, res, next) => {
    const { id } = req.user;
    try {
      await User.findByIdAndUpdate(id, { online: false });
      return userSignedOutResponse(req, res);
    } catch (error) {
      errorMessage(res, 400, error.message);
    }
  },
};

module.exports = controller;
