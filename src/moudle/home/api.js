import {get,post} from '../../common/utils/axios'

export function apiTest(pramas) {
   return get(Base + '/person/getDeviceTreeInfo',pramas)
}

