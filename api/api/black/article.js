const express = require('express');
const router = express.Router();
const dbquery = require('../../config/connect_db');
const generateUUID = require('../common/Unique');
const creatTime = require('../common/creatTime');
const {sqlHandle, readHandle, searchHandle, query} = dbquery;

// 获取一级二级分类
router.get('/class', (req, res, next) => {
    const sqlOneClass = 'select * from one_class';
    const sqlTwoClass = 'select * from two_class';    
    const asyncGetClass = async function () {
        const oneData = await readHandle(sqlOneClass);
        const twoData = await readHandle(sqlTwoClass);
        return {oneData, twoData};
    };
    asyncGetClass().then((data) => {
        res.send({
            code: 1211,
            msg: '获取类名成功',
            data
        });
    }).catch((err) => {
        console.log(err);
        res.send({
            code: 1212,
            msg: '获取类名失败',
            err
        });
    });
});
// 添加文章
router.post('/insertArticle', (req, res, next) => {
    const sqls = `insert into ${req.body.enname}(id, article_name, daodu, editer, content, oneId, twoId) values('${generateUUID()}', '${req.body.article_name}', '${req.body.daodu}','${req.body.editer}', '${req.body.content}', '${req.body.oneId}', '${req.body.twoId}')`;

    let updataArticleNum = `update two_class set article_num = article_num + 1 where id = '${req.body.twoId}'`;
    // console.log(insertArticle);
    const asyncInsertArticle = async function () {
        const insertAtc = await sqlHandle(sqls);
        const updateNum = await sqlHandle(updataArticleNum);
        return 'ok';
    };
    asyncInsertArticle().then((data) => {
        res.send({
            code: 1213,
            msg: '文章插入成功',
            data
        });
    }).catch((err) => {
        console.log(err);
        res.send({
            code: 1214,
            msg: '文章插入失败',
            err
        });
    });
});

// 获取文章列表
router.get('/getArticleList', (req, res, next) => {
    const sqlOne = 'select * from one_class';
    const asyncGetClass = async function () {
        const tabelName = await readHandle(sqlOne);
        console.log(tabelName);
        // 多张表sql的拼接（建立视图）
        let selectArtSql = 'select * from (';
        tabelName.forEach(function (i, index) {
            if (index < (tabelName.length - 1)) {
                selectArtSql += `select * from ${i.enname} union all `;
            } else {
                selectArtSql += `select * from ${i.enname}) as tabel_all order by time desc`;
            }
        });
        return await readHandle(selectArtSql);
    };
    asyncGetClass().then((data) => {
        res.send({
            code: 1215,
            msg: '获取列表成功',
            data
        });
    }).catch((err) => {
        console.log(err);
        res.send({
            code: 1216,
            msg: '获取列表失败',
            err
        });
    });
});

// 修改文章
router.post('/updateArticle', (req, res, next) => {
    const sqls = `update ${req.body.enname} set article_name = '${req.body.article_name}', editer = '${req.body.editer}', content = '${req.body.content}' where id = '${req.body.id}'`;
    console.log(sqls);
    sqlHandle(sqls).then(() => {
        res.send({
            code: '1217',
            msg: '修改文章成功'
        });
    }).catch((err) => {
        res.send({
            code: '1218',
            msg: '修改文章失败',
            err
        });
    });
});

// 删除文章
router.post('/deleteArticle', (req, res, next) => {
    const deleteSql = `delete from ${req.body.enname} where id = '${req.body.id}'`;
    const updateArticalNum = `update two_class set article_num = article_num - 1 where id = '${req.body.twoId}'`;
    console.log(deleteSql);
    const asyncDeleteArticle = async function () {
        const deleteSqls = await sqlHandle(deleteSql);
        const updateArticalNums = await sqlHandle(updateArticalNum);
        return 'ok';
    };
    asyncDeleteArticle().then(() => {
        res.send({
            code: '1219',
            msg: '删除文章成功'
        });
    }).catch((err) => {
        res.send({
            code: '1220',
            msg: '删除文章失败',
            err
        });
    });
});
module.exports = router;
