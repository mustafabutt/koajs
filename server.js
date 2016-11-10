var koa=require('koa'); 
                 app = koa(); 
                 var path = require('path');  
                 app.use(require('koa-static')('public')); 
                 route_teacher=require('./router/teacher.js');
				 
                 require('./router.js') 
                 var waterlineConfig = require('./waterline/config') 
                 , waterlineOrm = require('./waterline/init').waterlineOrm; 
                 var modelPath = path.join(__dirname, '/models');
                 require('./waterline/init')(modelPath); 
                 waterlineOrm.initialize(waterlineConfig, function (err, models) { 
                 if (err) throw err; 
                  db = function (table) { return models['collections'][table]; }; 
                  db.collections = models.collections; 
                 db.connections = models.connections; 
                 }); 
                 app.listen('3000', function (){ 
                 console.log('server is listening at porttt 3000');   
                 }); 
  