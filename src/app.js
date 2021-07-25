const express=require("express");
const app= express();
const hbs = require("hbs");
const path=require("path");
const port= process.env.PORT||8000;

const staticPath=path.join(__dirname,"../public");
app.set('view engine', 'hbs');
app.use(express.static(staticPath));

app.get('/', function (req, res) {
    res.render('home');
});
app.get('*', function (req, res) {
    res.render('404error');
});   

app.post('/', function (req, res) {
    console.log("req"+req);
    res.render('home');
});
 
app.listen(port, ()=>{
    console.log(`App listening to the port no. ${port}`);
});