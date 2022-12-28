function errorHandler(err, req, res,next){
    res.status(500).json({
        message : err.message,
        stack: err.stack
    })
}

function boomErrorHandler(err, req, res, next) {
    if (err.isBoom) {
      const { output } = err;
      res.status(output.statusCode).json(output.payload);
    } else {
      next(err);
    }
}

function queryErrorHandler(err, req, res, next) {
  if (err.parent) {
    const { fields, parent } = err;
    res.status(400).json({
      statusCode: 400,
      field: fields,
      message: parent.detail,
    });
  }
  next(err);
}



module.exports = {errorHandler, boomErrorHandler, queryErrorHandler};