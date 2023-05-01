const express=require("express")
const mongoose=require('mongoose')
const grocerymodel=require('./model/grocery.js')

const app=express()
//middleware
app.use(express.json())

app.listen(3009,()=>{
    console.log('port listened')
})

mongoose.connect('mongodb+srv://chinni:chinni@cluster0.6dkm45w.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('connected to database')
}).catch((err)=>{
    console.log(err)
})

//adding grocery
app.post('/add',async(req,res)=>{
    await grocerymodel.create({name:req.body.name,category:req.body.category,price:req.body.price}).then(()=>{
        res.status(200).json(req.body)
    }).catch((err)=>{
        res.send(err)
    })
})

//getting data
app.get('/',async(req,res)=>{
const user=await grocerymodel.find()
try{
    res.status(202).json(user)
}
catch(err){
    res.status(400).send(err)
}
})