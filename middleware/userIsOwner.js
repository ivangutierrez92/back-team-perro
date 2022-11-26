const { notOwnerResponse, documentNotFound } = require("../config/responses");

const userIsOwner = model => [
  async (req, res, next) => {
    let document = await model.findOne({ _id: req.params.id });
    if (document) {
      if (document.userId.equals(req.user.id)) {
        return next();
      }
      return notOwnerResponse(req, res);
    }
    return documentNotFound(req, res);
  },
];

module.exports = userIsOwner;
