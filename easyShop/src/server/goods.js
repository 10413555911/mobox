import request from '../utils/request'
export function goods_date(parmase) {     //获取本商品购物页面数据
    return request.get('/goods/detail/?id=' + parmase)
}
export function related(parmase) {     //获取相关商品
    return request.get('/goods/related/?id=' + parmase)
}
export function addordelete(parmase) {     //获取相关商品
    return request.post('/collect/addordelete', { parmase })
}
export function helper(parmase) {     //模糊搜索
    return request.get('/search/helper/?keyword=' + parmase)
}
export function list(parmase) {     //根据模糊搜索出来的页面数据
    return request.get('/goods/list', { parmase })
}
export function count(parmase) {     //获取在售商品的数量
    return request.get('/goods/count/?id=' + parmase)
}



