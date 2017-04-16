var express = require('express');
var fs = require('fs');

var app = express();
require('./routes.js')(app);


var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

if(process.env.NODE_ENV === "production"){
    app.enable('view cache');   //헨들바 템플릿 캐슁
}

app.set('port', process.env.PORT || 3000);

//static 미들웨어
app.use('/public', express.static(__dirname + '/public'));

app.use(require('body-parser').urlencoded({extended: true}));

/*
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
app.get('/admin/menu', function(req, res){
  res.render('admin/menu/menu');
});

//관리자 대메뉴 - 사용자관리
app.get('/admin/user', function(req, res){
  res.render('admin/user/user');
});
*/

/*
var autoViews = {};
app.use(function(req, res, next){
  var path = req.path.toLowerCase();
  //캐시가 있으면 뷰를 렌더링 한다.
  if(autoViews[path]) return res.render(autoViews[path]);
  //캐시가 없다면 일치하는 .handlebars 파일이 있는지 확인한다.
  if(fs.existsSync(__dirname + '/views' + path + '.handelbars')){
    autoViews[path] = path.replace(/^\//, '');
    return res.render(autoViews[path]);
  }
  //뷰를 찾을 수 없으므로 404 핸들러에게 넘긴다.
  next();
});
*/

app.use(function(req, res, next){
  res.status(404);
  res.render('404');
});


app.use(function(err, req, res, next){
  res.status(500);
  res.render('500');
});


app.listen(app.get('port'), function(){
  console.log(' wiish stared on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
