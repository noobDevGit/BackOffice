const sqlCon = require('../../mysql')

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


//get All Size
exports.getType = (req,res)=>{

    
    const SqlStatement=
    "select master_jenis.*, master_user.Nama FROM master_jenis INNER JOIN master_user ON master_jenis.CreatedBy = master_user.Id;"

    sqlCon.db.query(SqlStatement,(error,result)=>{


       if (error) {

        console.log(error);
        
       } else {


        res.send(JSON.stringify(result))

    
        

       }


    })

}




//get specific type
exports.getSpecificType=(req,res)=>{

    const{id} = req.params;

    const SqlStatement= "select * from master_jenis where id = ?;";

    sqlCon.db.query(SqlStatement,id,(error,result)=>{


       if (error) {

        console.log(error);
        
       } else {
        
            res.send(result)

       }


    })

}


//Update type
exports.updateType = (req,res)=>{
    const{id} = req.params;
    const {TypeName} = req.body
    const SqlUpdate = "update master_jenis set NamaJenis = ? where id = ?";
    const sqlCheckDuplicate = "select count(*) as 'Row' from master_jenis where NamaJenis = ?"


        sqlCon.db.query(sqlCheckDuplicate,TypeName,(error,result)=>{

        if (error) {
            console.log(error);
            
        }else if (parseInt(JSON.stringify(result[0].Row))>0) {
            
            res.send({
                message:'Type Already Exist',
                num:0
                })


        } else {

            sqlCon.db.query(SqlUpdate, [TypeName,id], (error,result)=>{
                if (error) {
                    console.log(error);
                }
                res.send({
                    message:'Data Succesfully Updated',
                    num:1
                    })
            })

        }
    
   })
        
}

   


//delete type
exports.deleteType = (req,res)=>{
    const{id} = req.params;

    const sqldelete =   'DELETE FROM master_jenis WHERE id = ?'

    sqlCon.db.query(sqldelete,id,(error,result)=>{

        if (error) {

            console.log(error);
            
        } else {


            res.send('Data Successfully Deleted')

            
        }


    })

}