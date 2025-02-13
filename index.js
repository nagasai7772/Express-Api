
const express=require('express');
const app=express();
const fs=require('fs')
const port=3000;
app.get('/',(req,res)=>
{
fs.readFile('./api.json','utf-8',(err,data)=>
{
    if(err)
    {
        res.send("Error Found")
    }
    else
    {
        let json_data=JSON.parse(data)
        if(req.query.cate=='men')
        {
            let mens=json_data.filter((val)=>
            {
                return val.category=="men's clothing"
            })
            res.send(JSON.stringify(mens))
        }
        else if(req.query.cate=='women')
        {
            let women=json_data.filter((val)=>
            {
                return val.category=="women's clothing"
            })
            res.send(JSON.stringify(women))
        }
        else if(req.query.cate=='ele')
        {
            let elec=json_data.filter((val)=>
            {
                return val.category=="electronics"
            })
            res.send(JSON.stringify(elec))
        }
        else if(req.query.cate=='jew')
        {
            let jew=json_data.filter((val)=>
            {
                return val.category=="jewelery"
            })
            res.send(JSON.stringify(jew))
        }
        else
        {
              res.send(JSON.stringify(json_data))
        }
    }
   
})})
app.listen(port,()=>
{
    console.log(`server is running at  ${port}`);
    
})







