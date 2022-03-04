
// 引入axios;
import axios from "axios";

// 创建axios实例
const my = axios.create({
  // 此地址上线之后要进行修改
  // 这个地址就是请求发生地址
  // header:timeout: 1000,
  // baseURL: 'https://some-domain.com/api/',
  baseURL:"http://localhost:8080/",
  headers: {
    "Content-Type": "content-type:application/x-javascript",
  },
});

// 创建get提交方法

/** 
@param {function} get   方法名
@param {string}  path   发送请求的uri地址
@param {object}  params  请求的参数
@param {object} config  配置参数 
*/

// get的params传参是以对象的方式传递
function get(path, params, config = {}) {
  return my.get(path, {
    params,
    ...config,
  })
}

// 创建post方法

/** 
@param {function} post  方法名
@param {string}  path   发送请求的uri地址
@param {Array}  data  请求的参数
@param {object} config  配置参数 
*/


function post(path, data = {}, config = {}) {
  return my.post(path, data, config)
}

export {
  get,
  post
}