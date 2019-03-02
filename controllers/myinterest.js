var connection = require('./../config');
module.exports.interest=function(req,res){
     var id=req.body.user_id;
    connection.query("SELECT INTERESTS FROM INTERESTS WHERE USER_ID IN(SELECT USER_ID FROM USER_DETAILS WHERE USER_ID = ?)",[id],function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
            console.log(error)
      }else
        {
            res.json({
                status:true,
                message:'successfull',
                data:results
            })
            console.log(results)
        }
         });
}