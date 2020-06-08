import Vue from 'vue'
import Axios from 'axios'
import Qs from 'qs'
Vue.prototype.$axios=Axios;
Axios.defaults.baseURL='http://jtbhtkf.cn1.utools.club/'	//服务器域名地址
Axios.defaults.headers.get['Content-Type']='application/x-www-form-urlencoded'//get默认配置
Axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded'//post默认配置
Axios.defaults.timeout = 10000;
		// 请求拦截
Axios.interceptors.request.use(function(config){
	let token = Storage.localGet('token') 
    if (token) {    
        token = 'bearer' + ' ' + token.replace(/'|"/g, '') // 把token加入到默认请求参数中 
        config.headers.common['Authorization'] = token 
    }
	if(config.method=="post"){
		config.data=Qs.stringify(config.data);
	}
	return config;
},function(err){
	return Promise.reject(err);
})

		// 响应拦截
Axios.interceptors.response.use(response=>{
	if (response.data.code === 10010 || response.data.code === 10011) { 
		Storage.localRemove('token') // 删除已经失效或过期的token（不删除也可以，登录后覆盖） 
		router.replace({	 
			path: '/index' // 到登录页重新获取token	 
		})	 
	} else if (response.data.token) { // 判断token是否存在，如果存在说明需要更新token	 
		Storage.localSet('token', response.data.token) // 覆盖原来的token(默认一天刷新一次) 
	}	 
	return response	 
}, function (error) {	 
	return Promise.reject(error)	 
})