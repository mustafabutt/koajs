var router=require('koa-router')(); 
             var ctrl=require('../controllers/teacher.js')();    
             router.post('/teacher' , ctrl.post); 
             router.get('/teacher/:id' , ctrl.getOne);
             router.get('/teacher' , ctrl.get);
             router.del('/teacher/:id' , ctrl.delete);
             router.put('/teacher/:id' , ctrl.put);
             module.exports=router;