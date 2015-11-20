module.exports = {
  get: function(req, res){
    if(req.query.language === 'es'){
      return res.json('Hola!');
    } else {
      return res.json('Hello!');
    }
  }
}
