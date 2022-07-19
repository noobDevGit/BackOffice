const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const cors = require('cors')

const db = mysql.createPool({

    host: "localhost",
    user: "root",
    password: "RootRoot123",
    database: "onlinestore"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(5000, ()=>{

    console.log('Server is Running on port 5000 test');

})


app.get('/',(req,res)=>{

    const SqlgetContact = "select * from master_user ";
    
    db.query(SqlgetContact,(error,result)=>{

        console.log('id = '+ result[0].Id);
        res.send(result);


    })
})

// Insert Ukuran
app.post('/api/post/ukuran',(req,res)=>{

    const {NamaUkuran, Panjang, Lebar} = req.body

    const sqlCheckDuplicate = "select count(*) as 'Row' from master_ukuran where NamaUkuran = ?"

    const SqlCreateCustomer= "insert into master_ukuran (NamaUkuran, CreatedBy, CreatedDate, Width, Height) values (?, 1, now(), ?, ? )";
 
    db.query(sqlCheckDuplicate,NamaUkuran,(error,result)=>{

            if(error){

                console.log(error);

            }else if (parseInt(JSON.stringify(result[0].Row))>0) {

                res.send({
                    message:'Data sudah ada di dalam sistem',
                    num:0
                    })
                
            }else{

                db.query(SqlCreateCustomer,[NamaUkuran, Panjang, Lebar],(error,result)=>{
                    if (error) {
            
                        console.log(error);
                        
                    }else{

                        res.send({
                            message:'Data berhasil di simpan',
                            num:1
                            })
                    }
                })
            

               

            }

            


    })
})


//get specific ukuran
app.get('/api/get/ukuran/:id',(req,res)=>{

    const{id} = req.params;

    const SqlStatement= "SELECT * FROM master_ukuran where id = ?;";

    db.query(SqlStatement,id,(error,result)=>{


       if (error) {

        console.log(error);
        
       } else {
        
            res.send(result)

       }


    })

})

//get All ukuran

app.get('/api/get/ukuran',(req,res)=>{

    
    const SqlStatement=
    "select master_ukuran.*, master_user.Nama FROM master_ukuran INNER JOIN master_user ON master_ukuran.CreatedBy = master_user.Id;"

    db.query(SqlStatement,(error,result)=>{


       if (error) {

        console.log(error);
        
       } else {


        res.send(JSON.stringify(result))

    
        

       }


    })

})


//Update ukuran
app.put('/api/put/ukuran/:id',(req,res)=>{
    const{id} = req.params;
    const {NamaUkuran, Panjang, Lebar, CurSize} = req.body
    const SqlUpdate = "update master_ukuran set NamaUkuran = ?, Height = ?, Width = ?  where id = ?";
    const sqlCheckDuplicate = "select count(*) as 'Row' from master_ukuran where NamaUkuran = ?"

    if (NamaUkuran.toUpperCase() === CurSize.toUpperCase()) {

        db.query(SqlUpdate, [NamaUkuran, Panjang, Lebar,id], (error,result)=>{
            if (error) {
                console.log(error);
            }
            res.send({
                message:'Data Succesfully Updated',
                num:1
                })
        })
        
    } else {

   db.query(sqlCheckDuplicate,NamaUkuran,(error,result)=>{

        if (error) {
            console.log(error);
            
        }else if (parseInt(JSON.stringify(result[0].Row))>0) {
            
            res.send({
                message:'Size Already Exist',
                num:0
                })

                console.log(CurSize + '    '+ NamaUkuran);

        } else {

            db.query(SqlUpdate, [NamaUkuran, Panjang, Lebar,id], (error,result)=>{
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

   
})



//Delete Size
app.delete('/api/delete/ukuran/:id',(req,res)=>{
        const{id} = req.params;

        const sqldelete =   'DELETE FROM master_ukuran WHERE id = ?'

        db.query(sqldelete,id,(error,result)=>{

            if (error) {

                console.log(error);
                
            } else {


                res.send('Data Successfully Deleted')

                
            }


        })

})