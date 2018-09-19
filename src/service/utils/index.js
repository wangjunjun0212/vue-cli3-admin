import request from './request'

/**
 * ajax 请求接口定义
 * @param  {String} url    请求路径(require)，基于全局 baseURL。仅需要填写剩余路径
 * @param  {String} method 请求方法，默认为 get
 * @param  {Object} data   请求体
 * @return {Promise}
 *
 * 使用例子 request({ url: '/login', method: 'post', data: {Object} })
 * 最简单的例子 request({ url: '/logout' })
 */
export default request
