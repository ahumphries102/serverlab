let express = require('express')
let app = express()

const PORT = 3000

app.get('/', (req, res)=>{
	res.send('<h1>BUDDAH FLAME</h1>')
})
console.log("I HEAR YOU ON PORT " + PORT)
app.listen(PORT)