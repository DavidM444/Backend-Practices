const express = require('express')
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.json())
app.use(express.urlencoded({extended:true}))


router.get("/", (req ,res) =>{
    res.sendFile(path.join(__dirname + '/templa/index.html'))
});

router.get("/perfil", (req ,res) =>{
    res.sendFile(path.join(__dirname + '/templa/perfil.html'))
});

router.get("/contacto", (req ,res) =>{
    res.sendFile(path.join(__dirname + '/templa/contacto.html'))
});


router.post("/", (req, res)=> {
    console.log(req.body)
    res.send(req.body)
})

app.use("/", router);
app.listen(process.env.port || 8080);
console.log("active on port: ")