import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router/index.js'
import { sessionGet } from './index.js'
import config from '~/config'


// 这边由于后端没有区分测试和正式，姑且都写成一个接口。
axios.defaults.baseURL = config[import.meta.env.MODE].baseUrl
// 携带 cookie，对目前的项目没有什么作用，因为我们是 token 鉴权
axios.defaults.withCredentials = false
// 请求头，headers 信息
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Authorization'] = 'Bearer ' + sessionGet('token') || ''
// 默认 post 请求，使用 application/json 形式
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截器，内部根据返回值，重新组装，统一管理。
axios.interceptors.response.use(res => {
	if (typeof res.data !== 'object') {
		ElMessage.error('服务端异常！')
		return Promise.reject(res)
	}

	if (res.data.status != 200) {
		console.log(res.response)

		return Promise.reject(res)
		// if (res.data.resultCode == 419) {
		//   router.push({ path: '/login' })
		// }
		// return Promise.reject(res.data)
	}

	return res.data
}, function(error) {
	console.log(error.response);
	ElMessage.error(error.response.data.error.message)
	return Promise.reject(error);
})

export default axios