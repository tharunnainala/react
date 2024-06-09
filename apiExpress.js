var exp = require('express');
var app = exp ();
app.use(exp.json());
app.get("/user",(req,res)=>{
    console.log(req.query);
    let {name,mobile} = req.query;
    res.end('your name is ${name}. mobile no is ${mobile}. address is ${address}');

})
app.post("/user",(req,res)=>{
let {email,password} = req.body;
    res.end(`Email is ${email}. password is ${password}`);
})
app.listen(8080,()=>{
    console.log("server started..!!!");
})