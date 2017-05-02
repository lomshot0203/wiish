/*
  작성일:20170416
  작성자:kyb
  설명: 메뉴관리 메뉴의 컨트롤러
*/

module.exports = {
  resiterRoutes: function(app){
    console.log('동작1...');
    app.get('/admin/menu', this.home);
  },
  home:function(req, res, next){
    console.log('동작2... nodemon 동작 하나?');
    res.render('admin/menu/menu');
  }
};
