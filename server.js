//BASIC
// app.get('/', function(req, res)
// 	{res.send('hello')
// 	//การรับข้อมูล
// 	//res.send คือส่งค่า hello ออกมา
// })
//END

const express = require('express')
//require เก็บค่า express ไว้ใน express
//const ตัวแปร ทีไม่สามารถ เปลี่ยนค่าได้
const {twig} = require('twig')
const app = express()

app.set('view engine', 'twig')

const homeController = require('./controllers/home.controller')
const newsController = require('./controllers/news.controller')

app.get('/', homeController.index)
app.get('/news', newsController.index)

app.use('/assets', express.static(__dirname + '/static/assets',{
	maxAge:86400000
}))

app.listen(8000,function(err){
	console.log('Server is running on port 8000')
	//listen คือ การ
	//console.log เป็นการให้มันแสดงค่าออกมา 



})