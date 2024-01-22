require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const asyncHandler = require('express-async-handler')
const userRoute = require('./routes/userRoute')
const productRoute = require('./routes/productRoute')
const app = express()
const errorMiddleware = require('./middleware/errorMiddleware')

//.env variables
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.Port
const FRONTEND = process.env.FRONTEND
//////////////////////////////////////

 //to inderstand the language
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorMiddleware)
app.use(cors())
//////////////////////////////////////////////////

//route imported
var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use('/api/products',productRoute);
app.use('/api/users',userRoute);

//routes

app.get('/',(req, res)=> {
  res.send('Hello World')
  
  
})

app.get('/blog',(req,res)=>{
    res.send('blog')
})







///////////////////////////////////////////////////////////////
//connection to mongodb
mongoose.connect(MONGO_URL)
.then(() => {
    console.log('Connected!')
    //creation de server
    app.listen(PORT, ()=>{
    console.log(`hello world`)
    })
    
}).catch((error)=>{
    console.log(error)
})
///////////