'use strict';

import { IndexPageModel } from '../model/index';

export default async function(req, res) {
    const indexModel = new IndexPageModel(req);
    res.bigpipe.bind('searchResult', () => indexModel.locationSearch(req.params.query));
    res.bigpipe.bind('detailResult', () => indexModel.detailSearch(req.params.poi));
    var pageData = await indexModel.getPageData({
        query: req.params.query,
        poi: req.params.poi
    });
    res.render('newtype/page/index.tpl', pageData);
};
