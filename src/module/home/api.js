import {get,post} from '../../common/utils/axios'

export function apiTest(pramas) {
  return get('/person/getDeviceTreeInfo', pramas)
}

