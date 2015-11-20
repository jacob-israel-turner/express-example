module.exports = {
  jsonChecker: function(req, res, next){
    if(req.headers['content-type'] !== 'application/json'){
      res.status(400).json('Expected content-type application/json');
    } else {
      next();
    }
  },
  requestLogger: function(req, res, next){
    console.log(`${req.method} request at ${req.url}`);
    console.log(`With queries: ${JSON.stringify(req.query)}`);
    next();
  }
}
