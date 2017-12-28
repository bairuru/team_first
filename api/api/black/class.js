const express = require('express');
const router = express.Router();
const dbquery = require('../../config/connect_db');
const generateUUID = require('../common/Unique');
const creatTime = require('../common/creatTime');
const {sqlHandle, readHandle, searchHandle, query} = dbquery;

// 插入一级分类
router.post('/insertOneClass', function (req, res, next) {
    console.log(req.body);
    const oneid = generateUUID();
    // 一级分类英文标识sql查询
    const sqlselect1 = `select id from one_class where enname = '${req.body.enname}'`;
    console.log(sqlselect1);
    // 二级分类英文标识sql查询
    const sqlselect2 = `select id from two_class where enname = '${req.body.enname_two}'`;
    // 一级分类插入数据sql
    const sqlinsert1 = `insert into one_class (id, enname, cnname, time) value ('${oneid}', '${req.body.enname}', '${req.body.cnname}', '${creatTime()}')`;
    // 二级分类插入数据sql
    const sqlinsert2 = `insert into two_class (id, parent_id, enname, cnname, article_num, time) value ('${generateUUID()}', '${oneid}', '${req.body.enname_two}', '${req.body.cnname_two}', '666', '${creatTime()}')`;
    // const createTable = `create table ${req.body.enname} (list int(11) unique not null auto_increment, id varchar(255) unioue primary key, oneid varchar(255), twoid varchar(255), article_name varchar(255), content longtext, time datetime, visitors int, daodu varchar(255), recommend tinyint, art_show tinyint`;
    const createTable = `CREATE TABLE ${req.body.enname} (LIST INT(11) UNIQUE NOT NULL AUTO_INCREMENT, id VARCHAR(255) UNIQUE PRIMARY KEY, oneId VARCHAR(255),  twoId VARCHAR(255), article_name VARCHAR(255) ,editer VARCHAR(255), content LONGTEXT,TIME DATETIME, visitors INT,daodu VARCHAR(255),recommend TINYINT,art_show TINYINT)`;
    const asyncInsertClassone = async function (parmas) {
        const serchOne = await searchHandle(sqlselect1);
        const serchTwo = await searchHandle(sqlselect2);
        const insert1 = await sqlHandle(sqlinsert1);
        const insert2 = await sqlHandle(sqlinsert2);
        const createTableState = await query(createTable);
        return 'ok';
    };
    asyncInsertClassone().then((data) => {
        console.log(data);
        res.send({
            code: 1111,
            msg: '数据插入成功'
        });
    }).catch((err) => {
        console.log(err);
        res.send({
            code: 1112,
            msg: '数据插入失败',
            err
        });
    });
});
// 插入二级分类
router.post('/insertTwoClass', (req, res, next) => {
    const sqlselect2 = `select id,article_num from two_class where enname='${req.body.enname_two}'`;
    const sqlinsert2 = `insert into two_class(id, parent_id, enname, cnname, article_num, time) values ('${generateUUID()}', '${req.body.oneId}', '${req.body.enname_two}', '${req.body.cnname_two}', 0, '${creatTime()}')`;
    const asyncInsertClasstwo = async function (parmas) {
        const serchTwo = await searchHandle(sqlselect2);
        const insert2 = await sqlHandle(sqlinsert2);
        return 'ok';
    };
    asyncInsertClasstwo().then((data) => {
        console.log(data);
        res.send({
            code: 1113,
            msg: '数据插入成功'
        });
    }).catch((err) => {
        console.log(err);
        res.send({
            code: 1114,
            msg: '数据插入失败',
            err
        });
    });
});

// 获取一级分类列表
router.get('/getOneClass', (req, res, next) => {
    const sql = 'select * from one_class';
    readHandle(sql).then((data) => {
        res.send({
            code: '1115',
            msg: '获取一级类名成功',
            data
        });
    }).catch((err) => {
        console.log(err);
        res.send({
            code: '1116',
            msg: '获取一级类名失败'
        });
    });
});

// 获取二级分类列表
router.get('/getTwoClass', (req, res, next) => {
    const sql = 'select * from two_class';
    readHandle(sql).then((data) => {
        res.send({
            code: '1117',
            msg: '获取二级类名成功',
            data
        });
    }).catch((err) => {
        console.log(err);
        res.send({
            code: '1118',
            msg: '获取二级类名失败'
        });
    });
});

// 修改一级类名
router.post('/updateOneClass', (req, res, next) => {
    // 修改一级分类
    const updatesql = `update one_class set enname = '${req.body.enname}', cnname = '${req.body.cnname}', time = '${creatTime()}' where id = '${req.body.id}'`;
    // 修改文章表名
    const updatetable = `alter table ${req.body.oldenname} rename ${req.body.enname}`;
    const asyncGetClass = async function (parmas) {
        const updateOneTable = await query(updatesql);
        const updateOneTableName = await query(updatetable);
        return 'ok';
    };
    asyncGetClass().then((data) => {
        res.send({
            code: 1119,
            msg: '一级类名修改成功'
        });
    }).catch((err) => {
        console.log(err);
        res.send({
            code: 1120,
            msg: '一级类名修改失败',
            err
        });
    });
});

// 修改二级类名
router.post('/updateTwoClass', (req, res, next) => {
    // 修改二级分类
    const updatesq2 = `update two_class set enname = '${req.body.enname}', cnname = '${req.body.cnname}', time = '${creatTime()}' where id = '${req.body.id}'`;
    sqlHandle(updatesq2).then((data) => {
        res.send({
            code: 1121,
            msg: '二级类名修改成功'
        });
    }).catch((err) => {
        console.log(err);
        res.send({
            code: 1122,
            msg: '二级类名修改失败',
            err
        });
    });
});

// 删除一级类名
router.post('/deleteOneClass', (req, res, next) => {
    // 删除一级分类
    const deletesql = `drop table ${req.body.enname}`;
    const deletetab_one = `delete from one_class where id = '${req.body.id}'`;
    const deletetab_two = `delete from two_class where id = '${req.body.id_two}'`;
    // 此时二级分类中存在的数据并未删除
    const asyncDeleteClass = async function (parmas) {
        const delete1 = await query(deletesql);
        const delete2 = await query(deletetab_one);
        const delete3 = await query(deletetab_two);
        return 'ok';
    };
    asyncDeleteClass().then((data) => {
        res.send({
            code: 1123,
            msg: '一级类名删除成功'
        });
    }).catch((err) => {
        console.log(err);
        res.send({
            code: 1124,
            msg: '一级类名删除失败',
            err
        });
    });
});

// 删除二级类名
router.post('/deleteTwoClass', (req, res, next) => {
    // 删除二级分类
    const deletesql2 = `delete from two_class where id = '${req.body.id}'`;
    query(deletesql2).then((data) => {
        res.send({
            code: 1125,
            msg: '二级类名删除成功'
        });
    }).catch((err) => {
        console.log(err);
        res.send({
            code: 1126,
            msg: '二级类名删除失败',
            err
        });
    });
});

// 获取树状结构的分类列表
router.get('/getClassList', (req, res, next) => {
    const sqlOne = 'select * from one_class';
    const sqlTwo = 'select * from two_class';
    const asyncGetClass = async function (parmas) {
        const classOneList = await readHandle(sqlOne);
        const classTwoList = await readHandle(sqlTwo);
        return {classOneList, classTwoList};
    };
    asyncGetClass().then((data) => {
        let result = [];
        data.classOneList.forEach((i) => {
            let obj = {
                oneClass: i,
                twoClass: []
            };
            data.classTwoList.forEach((j) => {
                if (i.id === j.parent_id) {
                    obj.twoClass.push(j);
                }
            });
            result.push(obj);
        });
        res.send({
            code: 1131,
            msg: '数据查询成功',
            result
        });
    }).catch((err) => {
        console.log(err);
        res.send({
            code: 1132,
            msg: '数据查询失败',
            err
        });
    });
});
module.exports = router;
