/*
  작성일 : 20170415
  작성자 : kyb
  설명 : 모든 라우터 관리파일
*/

module.exports = function(app){

  app.get('/', function(req, res){
    res.render('home');
  });

  app.get('/about', function(req, res){
    res.render('about');
  });

  app.get('/contact', function(req, res){
    res.render('contact');
  });

  //관리자 대메뉴
  app.get('/admin', function(req, res){
    res.render('admin/menu/menu');
  });

  //관리자 대메뉴 - 메뉴관리
  require('./controller/admin/menu/adminMenuC.js').resiterRoutes(app);

  //관리자 대메뉴 - 메뉴관리
  // app.get('/admin/menu', function(req, res){
  //   res.render('admin/menu/menu');
  // });

  //관리자 대메뉴 - 사용자관리
  app.get('/admin/user', function(req, res){
    res.render('admin/user/user');
  });

};
