var connection = require('./../config');
module.exports.addinterest=function(req,res){
   var users=req.body;
    console.log(users);
   connection.query('INSERT INTO INTERESTS SET ?',users,function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
            console.log(error)
      }else{
                res.json({
                    status:true,
                    message:'successfully authenticated'

                })
             
       

}
})
}