/**这个是用户注册路由 */
var express = require('express');

var router = express.Router();

router.get('/',function(req, res, next){
    res.render('register',{});
})

module.exports = router;