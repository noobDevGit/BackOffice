const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const cors = require('cors')

exports.db = mysql.createPool({

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



///////////////////////////////////////////Size Controller///////////////////

//size controller instance 
const sizeController = require('../Server/Controllers/SizeController/SizeController')


// Insert Size
app.post('/api/post/ukuran',sizeController.insertSize)

//get All size
app.get('/api/get/ukuran',sizeController.getSize)


//get specific size
app.get('/api/get/ukuran/:id',sizeController.getSpecificSize)


//Update size
app.put('/api/put/ukuran/:id',sizeController.updateSize)


//Delete Size
app.delete('/api/delete/ukuran/:id',sizeController.deleteSize)


/////////////////////////////////////////// End Of Size Controller///////////////////

///////////////////////////////////////////Type Controller///////////////////


// Type Controller Instance
const typeController = require('../Server/Controllers/TypeController/TypeController')

// Insert Type
app.post('/api/post/type',typeController.CreateType)