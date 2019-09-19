var express = require("express");
var router  = express.Router();
var middleware = require("../middleware");
var twittermod = require ("../middleware/twitter")


var { isLoggedIn } = middleware; // destructuring assignment


router.get("/", isLoggedIn, function(req, res){
    if(req._parsedUrl.query === '' || req._parsedUrl.query === null) {
      res.render("search/search", {page: 'search'})
    } else {
      var arg = req._parsedUrl.query.replace(/%20| /g, ' ');
      twittermod.printItem(arg, function (result) {
      res.json(result);
      });
    }
});


module.exports = router;
