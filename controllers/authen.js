var connection = require('./../config');
module.exports.authenticate=function(req,res){
  console.log('heyyy')
    var users=req.body.email;
   var password=req.body.password;
    console.log('he')
    console.log(users)
    console.log(password)
   
    connection.query('SELECT password FROM USER_DETAILS WHERE EMAIL = ?',[users],function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
            console.log(error)
      }else{
        if(results.length >0){
          pas=results[0].password;

            if(password==pas){
                res.json({
                    status:true,
                    message:'successfully authenticated'

                })
                console.log(results)
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
                 console.log(error)
                 console.log(results[0].password)
            }
          }
         
        
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      
      }
    });
}