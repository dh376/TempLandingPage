
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send('respond with a resource');
};


/*
 * GET login page.
 */

exports.login = function(req, res, next) {
  res.render('login');
};

/*
 * GET logout route.
 */

exports.logout = function(req, res, next) {

  res.redirect('/');
};


/*
 * POST authenticate route.
 */

exports.authenticate = function(req, res, next) {
  console.log("user.authenticate");

};
exports.subscribe = function(req, res, next) {

  var email = req.body.email;
  console.log("user.subscribe: " + req.body.email);




  res.redirect('/');
};
