const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000
let todolist = []
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
// getting req and sending response
app.get('/', (req, res) => {
    let today = new Date();
    let options = { weekday: 'long', day: 'numeric', month: 'long'}
    let day = today.toLocaleTimeString('en-US', options)
    res.render('list', {kindOfDay: day, newItems: todolist})
})
app.post('/',(req,res)=>{
    let newTodo =  req.body.newItems;
    todolist.push(newTodo)
console.log(__dirname + '/public')

    res.redirect('/')
})

app.listen(port, () => {
    console.log(`server is up and running on port ${port}`)
})
