var parse = require('co-body'); 
         var teacher=function(){ 
                 var post= function *(){  
                         var userFormRequest = yield parse(this); 
                         var user=yield db('teacher').create(userFormRequest); 
                         this.body= user; 
                         }; 
                         var get=function *(){  
                             var user= yield db('teacher').find({}); 
                             this.body=user; 
                         }; 
                     var getOne=function * (id){ 
                         var user= yield db('teacher').findById(this.params.id); 
                             this.response.body=user[0]; 
                         }; 
                             var del=    function * (id){ 
                             var user= yield db('teacher').destroy({id:this.params.id}); 
                         this.body='User is Deleted'; 
                     };   
                     var put=function *(id){ 
                     var userFormRequest = yield parse(this); 
                         var user= yield db('teacher').update({id:this.params.id} ,userFormRequest); 
                             this.response.body=user; 
                                 }; 
         return {  
             get:    get,  
             post:   post,  
             getOne: getOne,  
             put:    put,  
             delete: del  
         }  
     }  
     module.exports=teacher;  
 