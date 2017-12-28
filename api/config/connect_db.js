const mysql = require('mysql');
const config = require('./config');
const connection = mysql.createPool(config.sql_config);
const moment = require('moment');// 数据库时间转js时间格式
const query = (sql) => {
    return new Promise((resolve, reject) => {
        connection.getConnection((err, connect) => {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            connect.query(sql, (err, rows, fileds) => {
                resolve(rows);
                connect.release();
            });
        });
    });
};
// 读取操作 
const readHandle = (sql) => {
    return new Promise((resolve, reject) => {
        query(sql).then((data) => {
            data = data.map((i) => {          
                i.time = moment(i.time).format('YYYY-MM-DD HH:mm:ss');
                return i;
            });
            resolve(data);
        }).catch((err) => {
            console.log(err);
            reject(err);
        });
    });
};
// 其他数据库操作
const sqlHandle = (sql) => {
    return new Promise((resolve, reject) => {
        query(sql).then((data) => {
            if (data.affectedRows >= 0) {
                resolve('ok');
            } else {
                resolve('err');
            };
        }).catch((err) => {
            console.log(err);
            reject(err);
        });
    });
};
// 检索判断数据库是否有此值
const searchHandle = (sql) => {
    return new Promise((resolve, reject) => {
        query(sql).then((data) => {
            if (data.length > 0) {
                reject('有值');
            } else {
                resolve('无值');
            };
        }).catch((err) => {
            console.log(err);
            reject(err);
        });
    });
};
module.exports = {
    searchHandle,
    readHandle,
    sqlHandle,
    query
};
