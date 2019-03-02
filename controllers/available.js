var connection = require('./../config');
module.exports.availabledata =function(req,res){
    var id =req.body.user_id;
    connection.query('SELECT * FROM available WHERE DATES IN(SELECT myholidays FROM myholidays WHERE USER_ID= ?)' ,[id],function (error, results, fields) {
    if (error) {
        res.json({
          status:false,
          message:'there are some error with query'
          })
          console.log(error)
    }else{
      
        
              res.json({
                  status:true,
                  message:'successfully Updated'

              })
              console.log(results)
          
          }
        
     })
}