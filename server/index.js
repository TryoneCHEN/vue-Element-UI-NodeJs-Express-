// 1.引入express
const express = require('express')
// 2.定义express的一个实例
const app =express()

// 5.允许跨域
app.use(require('cors')())
// 注意:这句话是客户端提交过来的json数据要识别
app.use(express.json())

// 6.数据库 
// 定义一个模型
const mongoose = require('mongoose')
// 连接数据库
mongoose.connect("mongodb://localhost:27017/element-admin", {
    // 给下面这个三个参数 解决白色警告
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
})
// 7.建立一个模型
const Article = mongoose.model('Article',new mongoose.Schema({
    title:{type:String},
    body:{type:String},
}))

app.get('/', async(req,res)=>{
    res.send('index')
})
// 8.新增文章
// 一个post方法
app.post('/api/articles', async (req,res) => {
    // 在模型上create一个数据
    const article = await Article.create(req.body)
    // 发送
    res.send(article)
})

// 9.文章列表
// 一个get方法
app.get('/api/articles', async (req,res) => {
    // 在模型上create一个数据
    const articles = await Article.find(req.body)
    // 发送
    res.send(articles)
})
// 4.默认首页
app.get('/', async(req,res)=>{
    res.send('index')
})

// 3.开启实例监听
app.listen(3001,()=>{
    console.log('http://localhost:3001');
    
})