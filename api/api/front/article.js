const express = require('express')
const router = express.Router()

const dbquery = require('../../config/connect_db')
const unique = require('../common/Unique')
const creatTime = require('../common/creatTime')
// 数据库用来转换js时间格式
const moment = require('moment')
const {sqlHandle,readHandle,searchHandle,query} = dbquery

//获取头部导航数据 /api/front/article/getNav
router.get('/getNav',function (req,res,next) {
    const sqlone = 'select * from one_class'
    const sqltwo = 'select * from two_class'
    const asyncGetClass = async function () {
        let oneClass = await readHandle(sqlone)
        let twoClass = await readHandle(sqltwo)
        return{
            oneClass,
            twoClass
        }
    }
    asyncGetClass().then((data) => {
        let resdata = []
        const {oneClass,twoClass} = data
        oneClass.forEach(function (i) {
            let everydata = {
                onedata: i,
                twodata: []
            }
            twoClass.forEach(function (j) {
                if (i.id == j.parent_id) {
                    everydata.twodata.push(j)
                }
            })
            resdata.push(everydata)
        }) 
        res.send({
            code: '1001',
            data: resdata,
            msg: '查询成功'
        })
    }).catch((err) => {
        res.send({
            code: '1002',
            data: null,
            msg: '查询失败'
        })
    })      
})
// 前台获取所有可显示的文章接口 /api/front/article/getArticleAll
router.get("/getArticleAll", function(req, res, next) {
    var sqlone = `select * from one_class`
    var sqltwo = `select * from two_class`
    // 拼接查询文章的sql
    const connectSql=(oneClass)=>{
         // 根据一级类名拼接sql
         var selectArtSql = `select * from (`
         oneClass.forEach(function(i, index) {
             if (index < (oneClass.length - 1)) {
                 selectArtSql += `select * from ${i.enname} UNION ALL`
             } else {
                 selectArtSql += ` select * from ${i.enname})as tabel_all where art_show=1 order by time desc`
             }
 
         }, this);
         return selectArtSql
    }
    // 将一二级类名的中英文标识添加入文章列表
    const connectArticle=(data)=>{
        const {articleData,oneClass,twoClass}=data
        return  articleData.map(function(i) {
                    oneClass.forEach(function(j) {
                        if (j.id == i.oneId) {
                            i.enname_one = j.enname
                            i.cnname_one = j.cnname
                        }
                    })
                    twoClass.forEach(function(j) {
                        if (j.id == i.twoId) {
                            i.enname_two = j.enname
                            i.cnname_two = j.cnname
                        }
                    })
                    return i
                });
         
    }

    const asyncGetArticle=async function(){
        let oneClass=await  readHandle(sqlone)
        let twoClass=await  readHandle(sqltwo)
        let articleData=await  readHandle(connectSql(oneClass))
        return connectArticle({articleData,oneClass,twoClass})
    }

    asyncGetArticle().then((data)=>{
        res.send({
            code: "6012",
            data,
            msg: "查询成功"
        })
    }).catch((err)=>{
        res.send({
            code: "6013",
            data: null,
            msg: "查询失败"
        })
    })

})

// 根据一级分类查询二级分类列表 /api/front_article/getClassTwo
router.post('/getClassTwo', function (req,res,next) {
    const sql = `select * from two_class where parent_id='${req.body.oneId}'`
    readHandle(sql).then((data) => {
        res.send({
            code: '2001',
            msg: '数据查询成功',
            data: data
        })
    }).catch((err) =>{
        res.send({
            code: '2002',
            msg: '数据查询失败',
            data: null
        })
    })
})

// 前台根据文章id获取相应文章 /api/front/article/getArticle
router.get('/getArticle', function(req,res,next) {
    const sqlone = `select * from one_class`
    // 拼接查询文章的sql
    const connectSql = (oneClass) => {
        // 根据一级类名拼接sql
        const selectArtSql = `select * from (`
        oneClass.forEach(function(i,index){
            if(index < oneClass.length - 1){
                selectArtSql += `select * from ${i.enname} UNION ALL`
            }else {
                selectArtSql += `selectArtSql * from ${i.enname})as table_all where id='${req.query.id}' and art_show=1 order by time desc`
            }
        },this);
        return selectArtSql
    }
    // 更新文章读取量
    const connectUpdataSql = (oneClass) => {
        if(articleData.length>0) {
            let sql = `CREATE VIEM all_article_table(id,visitors) AS SELECT id,visitors FROM `
            oneClass.forEach((i,index) => {
                sql += `${i.enname}`
            })
        }
    }
    const asyncGetArticle=async function(){
        let oneClass=await  readHandle(sqlone)
        let articleData=await  readHandle(connectSql(oneClass))
        return articleData
    }

    asyncGetArticle().then((data)=>{
        res.send({
            code: "6012",
            data,
            msg: "查询成功"
        })
    }).catch((err)=>{
        res.send({
            code: "6013",
            data: null,
            msg: "查询失败"
        })
    })
})

module.exports = router;