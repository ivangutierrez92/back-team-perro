const { mustBeItselfResponse } = require("../config/responses");

function userIsItself(req, res, next) {
  if (req.user.id.equals(req.params.id)) {
    return next();
  }

  

  return mustBeItselfResponse(req, res);
}

module.exports = userIsItself;
