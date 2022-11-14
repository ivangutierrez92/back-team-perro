const errorHandler = {
  notFound(req, res, next) {
    res.status(404).json({ message: `Route ${req.url} with the method ${req.method} isn't implemented` });
  },
};

module.exports = errorHandler;
