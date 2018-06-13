import axios from 'axios'
import qs from 'qs'

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
