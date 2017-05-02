/*
  작성일:20170416
  작성자:kyb
  설명: 메뉴관리 메뉴의 컨트롤러
*/

module.exports = {
  resiterRoutes: function(app){
    app.get('/admin/menu.do', this.home);
  },
  home:function(req, res, next){
    res.render('admin/menu/menu');
  }
};
