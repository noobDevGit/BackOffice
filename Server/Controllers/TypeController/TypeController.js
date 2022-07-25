const sqlCon = require('../../index')

//insert Type
exports.CreateType = (req,res)=>{

    const {TypeName} = req.body

    const sqlCheckDuplicate = "select count(*) as 'Row' from master_jenis where NamaJenis = ? "

    const SqlCreateType= "INSERT INTO master_jenis (NamaJenis, CreatedBy, CreatedDate) VALUES (?, 1, now());";
 
    sqlCon.db.query(sqlCheckDuplicate,TypeName,(error,result)=>{

            if(error){

                console.log(error);

            }else if (parseInt(JSON.stringify(result[0].Row))>0) {

                res.send({
                    message:'Data already exist',
                    num:0
                    })
                
            }else{

                sqlCon.db.query(SqlCreateType,TypeName,(error,result)=>{
                    if (error) {
            
                        console.log(error);
                        
                    }else{

                        res.send({
                            message:'Data stored successfully',
                            num:1
                            })
                    }
                })
            

               

            }

            


    })
}