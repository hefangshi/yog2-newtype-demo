var normalModel = require('../model/normal');

module.exports = function (req, res, next) {
    res.bigpipe.bind('searchResult', function () {
        return locationSearch(req.params.query);
    });
    res.bigpipe.bind('detailResult', function () {
        return detailSearch(req.params.poi);
    });
    normalModel.getPageData({
        query: req.params.query,
        poi: req.params.poi
    }).then(function (pageData) {
        res.render('newtype/page/index.tpl', pageData);
    }).catch(next);
};
