import axios from 'axios'
import router from '../../router'

axios.defaults.timeout = 5000
axios.defaults.baseURL = Base

axios.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('token')) {
      config.headers.Authorization = `token ${sessionStorage.getItem('token')}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export function get (url,params) {
   return new Promise((resolve,reject) =>{
     axios.get(url,{
       params:params
     })
       .then(response =>{
          resolve(response.data);
     })
       .catch(err =>{
         reject(err)
       })
   })
}

export function post (url,params) {
  return new Promise((resolve,reject) =>{
    axios.post(url,params)
      .then(response =>{
        resolve(response.data);
      })
      .catch(err =>{
        reject(err)
      })
  })
}
