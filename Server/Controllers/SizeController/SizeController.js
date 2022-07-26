const sqlCon = require('../../mysql')

//get All Size
exports.getSize = (req,res)=>{

    
    const SqlStatement=
    "select master_ukuran.*, master_user.Nama FROM master_ukuran INNER JOIN master_user ON master_ukuran.CreatedBy = master_user.Id;"

    sqlCon.db.query(SqlStatement,(error,result)=>{


       if (error) {

        console.log(error);
        
       } else {


        res.send(JSON.stringify(result))

    
        

       }


    })

}


//insert size
exports.insertSize = (req,res)=>{

    const {NamaUkuran, Panjang, Lebar} = req.body

    const sqlCheckDuplicate = "select count(*) as 'Row' from master_ukuran where NamaUkuran = ?"

    const SqlCreateCustomer= "insert into master_ukuran (NamaUkuran, CreatedBy, CreatedDate, Width, Height) values (?, 1, now(), ?, ? )";
 
    sqlCon.db.query(sqlCheckDuplicate,NamaUkuran,(error,result)=>{

            if(error){

                console.log(error);

            }else if (parseInt(JSON.stringify(result[0].Row))>0) {

                res.send({
                    message:'Data already exist',
                    num:0
                    })
                
            }else{

                sqlCon.db.query(SqlCreateCustomer,[NamaUkuran, Panjang, Lebar],(error,result)=>{
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




//get specific size
exports.getSpecificSize=(req,res)=>{

    const{id} = req.params;

    const SqlStatement= "SELECT * FROM master_ukuran where id = ?;";

    sqlCon.db.query(SqlStatement,id,(error,result)=>{


       if (error) {

        console.log(error);
        
       } else {
        
            res.send(result)

       }


    })

}



//Update size
exports.updateSize = (req,res)=>{
    const{id} = req.params;
    const {NamaUkuran, Panjang, Lebar, CurSize} = req.body
    const SqlUpdate = "update master_ukuran set NamaUkuran = ?, Height = ?, Width = ?  where id = ?";
    const sqlCheckDuplicate = "select count(*) as 'Row' from master_ukuran where NamaUkuran = ?"

    if (NamaUkuran.toUpperCase() === CurSize.toUpperCase()) {

        sqlCon.db.query(SqlUpdate, [NamaUkuran, Panjang, Lebar,id], (error,result)=>{
            if (error) {
                console.log(error);
            }
            res.send({
                message:'Data Succesfully Updated',
                num:1
                })
        })
        
    } else {

        sqlCon.db.query(sqlCheckDuplicate,NamaUkuran,(error,result)=>{

        if (error) {
            console.log(error);
            
        }else if (parseInt(JSON.stringify(result[0].Row))>0) {
            
            res.send({
                message:'Size Already Exist',
                num:0
                })

                console.log(CurSize + '    '+ NamaUkuran);

        } else {

            sqlCon.db.query(SqlUpdate, [NamaUkuran, Panjang, Lebar,id], (error,result)=>{
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

   
}


//delete size
exports.deleteSize = (req,res)=>{
    const{id} = req.params;

    const sqldelete =   'DELETE FROM master_ukuran WHERE id = ?'

    sqlCon.db.query(sqldelete,id,(error,result)=>{

        if (error) {

            console.log(error);
            
        } else {


            res.send('Data Successfully Deleted')

            
        }


    })

}