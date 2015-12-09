'use strict';

export default class IndexPageModel {
    constructor(req) {
        this.req = req;
    }

    async getPageData (data) {
        await this.sleep(100); // 模拟获取页面数据需要100ms
        return {
            title: 'FIS',
            welcome: 'Hello Word!',
            query: data.query,
            poi: data.poi
        };
    }

    sleep (ms) {
        return new Promise((resolve)=> setTimeout(resolve, ms));
    }
}
