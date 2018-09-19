import request from '@/service/utils/'
import api from './index'
/**
 * 登录接口
 *
 * @param  {Object} data {usr: '2121', pwd: 'serect'}
 * @return {Promise}
 */
export function login (data) {
  return request({ url: api.login, method: 'post', data })
}