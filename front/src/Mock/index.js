import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import heade from './data/header';
import leftlist from './data/leftlist';
import paihang from './data/paihang';
import newarticle from './data/new';
export default {
    bootstrap () {
        const mock = new MockAdapter(axios);
        //头部
        mock.onGet('/heade').reply((data) => {
            return new Promise((resolve, reject) => {
                resolve([200, heade]);
            });
        });
        //左侧列表
        mock.onGet('/leftlist').reply((data) => {
            return new Promise((resolve, reject) => {
                resolve([200, leftlist]);
            });
        });
        //排行
        mock.onGet('/paihang').reply((data) => {
            return new Promise((resolve, reject) => {
                resolve([200, paihang]);
            });
        });
        //最新文章
        mock.onGet('/newarticle').reply((data) => {
            return new Promise((resolve, reject) => {
                resolve([200, newarticle]);
            });
        });
    }
};
