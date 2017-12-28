const express = require('express');
const router = express.Router();
const dbquery = require('../../config/connect_db');
const generateUUID = require('../common/Unique');
const creatTime = require('../common/creatTime');
const {sqlHandle, readHandle, searchHandle, query} = dbquery;


// 获取用户名和密码
router.get('/getUser', (req, res, next) => {
    const sql = 'select * from user';
    readHandle(sql).then((data) => {
        res.send({
            code: '0001',
            msg: '用户名获取成功',
            data
        });
    }).catch((err) => {
        console.log(err);
        res.send({
            code: '0002',
            msg: '用户名获取失败'
        });
    });
});
module.exports = router;