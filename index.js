const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const Product=require('./modules/prouct.module.js')
const productRoute=require('./router/product.router.js')

// Load environment variables from .env file
dotenv.config();

const app=express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/products',productRoute)

app.get('/',(req,res)=>{
    res.send('checking the api')
})

//curd operator with mongodb
//post method
// app.post('/addproduct',)

// //get all the products
// app.get('/listproduct',)

// //get single products
// app.get('/listproduct/:id',)

// //update the products
// app.put('/updateproduct/:id',)

// //delete the products
// app.delete('/deleteproduct/:id',)

let PORT=process.env.PORT || 3000

// app.listen(3000,()=>console.log('Working fine in port 3000'))

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{console.log('DB connected')
    app.listen(PORT,()=>console.log('Working fine in port 3000'))
}
)
.catch((e)=>console.log('Something went wrong',e))