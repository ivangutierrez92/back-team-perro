const errorHandlers = {
  notFound(req, res, next) {
    res.status(404).json({ message: `Route ${req.url} with the method ${req.method} isn't implemented` });
  },
  errorHandler(error, _req, res, _next) {
    console.error(`There was an error: `, error.message);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  },
};

module.exports = errorHandlers;
