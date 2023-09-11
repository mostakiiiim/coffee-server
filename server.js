const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}) 

app.get('/', (req, res)=>{
    const users =[
        {id:1, name:'Mocha'},
        {id:2, name:'Cappuccino'},
        {id:3, name:'Americano'},
        {id:4, name:'Latte'},
    ]
    res.json(users);
})

