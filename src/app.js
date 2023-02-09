const express = require('express');
const db = require('./utils/database');
const postsRouter = require('./posts/posts.router');
const app = express()
app.use(express.json());
require('dotenv').config();


db.authenticate()
    .then(()=>console.log('db authenticated -O-'))
    .catch(err=>console.log(err))

db.sync()
    .then(()=>{
        console.log('the db sys is correct ;D')
    })
    .catch(err=>console.log(err))


app.get('/',(req,res)=>{
    res.status(200).json('server works Fine ;D')
})


app.use('/api/v1',postsRouter);

app.listen(9000,()=>{
    console.log(`we are running at port ==> ${process.env.PORT}`)
})
module.exports = app
