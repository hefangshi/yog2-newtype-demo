module.exports.getPageData = function (data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({
                title: 'FIS',
                welcome: 'Hello Word!',
                query: data.query,
                poi: data.poi
            });
        }, 100);
    });
};
