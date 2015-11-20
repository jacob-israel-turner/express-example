var guestList = {};


module.exports = {
  get: function(req, res){
    res.json(guestList);
  },
  post: function(req, res){
    var guests = req.body;
    // {guestName: true}
    for(var key in guests){
      guestList[key] = guests[key];
    }
    res.json(true);
  },
  put: function(req, res){
    var guestName = req.params.guestName;
    // {attending: true}
    guestList[guestName] = req.body.attending;
    res.json(true);
  }
}
