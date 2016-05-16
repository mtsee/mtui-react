import { SET_USER_INFO } from '../containers/constants'

//设置公司名称
export function setUserInfo(data) {
  return {
    type: SET_USER_INFO,
    data :data
  }
}

