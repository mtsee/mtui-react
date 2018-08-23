//reducer
export const SET_USER_INFO = 'SET_USER_INFO' //设置用户信息

//设置公司名称
export function setUserInfo(data) {
  return {
    type: SET_USER_INFO,
    data :data
  }
}

