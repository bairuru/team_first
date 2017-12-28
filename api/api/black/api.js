const express = require('express');
const router = express.Router();
const dbquery = require('../../config/connect_db');
const generateUUID = require('../common/Unique');
const creatTime = require('../common/creatTime');
const {readHandle, sqlHandle, query} = dbquery;

router.post('/insert', function (req, res, next) {
    console.log(req.body);
    console.log(generateUUID());
    console.log(creatTime());
    const sql = `insert into apilist (id, title, url, type, sendparams, getparams, backorfont, time) value ('${generateUUID()}','${req.body.title}', '${req.body.url}', '${req.body.type}', '${req.body.sendparams}','${req.body.getparams}', '${req.body.backorfont}', '${creatTime()}')`;
    sqlHandle(sql).then((data) => {
        console.log(data);
        res.send({
            code: 1011,
            msg: '数据插入成功'
        });
    }).catch((err) => {
        console.log(err);
        res.send({
            code: 1012,
            msg: '数据插入失败'
        });
    });
});

router.get('/select', function (req, res, next) {
    console.log(req.body.type);
    // console.log(generateUUID());
    // console.log(creatTime());
    const sql = `select * from apilist where backorfont = '${req.query.type}'`;
    readHandle(sql).then((data) => {
        res.send({
            code: 1013,
            msg: '数据读取成功',
            data
        });
    }).catch((err) => {
        res.send({
            code: 1014,
            msg: '数据读取失败',
            err
        });
    });
});

router.post('/del', function (req, res, next) {
    console.log(req.body);
    console.log(generateUUID());
    console.log(creatTime());
    const sql = `delete from apilist where id = '${req.body.id}'`;
    sqlHandle(sql).then((data) => {
        res.send({
            code: 1015,
            msg: '数据删除成功',
            data
        });
    }).catch((err) => {
        res.send({
            code: 1016,
            msg: '数据删除失败',
            err
        });
    });
});

router.post('/update', function (req, res, next) {
    console.log(req.body);
    const sql = `update apilist set title='${req.body.title}', url='${req.body.url}', type='${req.body.type}', sendparams='${req.body.sendparams}',getparams='${req.body.getparams}', backorfont='${req.body.backorfont}', time='${creatTime()}' where id ='${req.body.id}'`;
    sqlHandle(sql).then((data) => {
        console.log(data);
        res.send({
            code: 1017,
            msg: '数据更改成功',
            data
        });
    }).catch((err) => {
        res.send({
            code: 1018,
            msg: '数据更改失败',
            err
        });
    });
});

module.exports = router;
