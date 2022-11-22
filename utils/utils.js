const errorMessage = (res, status, message) => {
  res.status(status).json({
    sucess: false,
    message:message,
  });
};

module.exports = {errorMessage}



