/**
 * @file APP 路由
 * @author fis@baidu.com
 */

export default function router (router) {
    router.get('/normal/:query/:poi', router.action('normal'));
    router.get('/:query/:poi', router.action('index'));
}
