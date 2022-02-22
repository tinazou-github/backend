const express=require("express");

let app=express();


let router=express.Router();

router.get('/',(request,response)=>{
    response.status(200).send("hello world!");
});

router.get("/special",(req,res)=>{
    res.status(200).send("hello world!");
});

router.get("/person",(req,res)=>{
    res.status(200).send('hello,${req.query.name}');
});

router.post("/input",(request,response)=>{
    response
    .status(200)
    .send(
        'first name: ${requst.body.first_name} | Last name: ${request.body.last_name}'
    );
});


app.use(router);
   
app.listen(3000,(errors)=>{
    if(errors){
        console.log(errors);
    }else{
        console.log("server running at port 3000");
    }
});
