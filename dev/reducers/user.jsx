//定义方法名称，取个名称，action 内使用一个字符串类型的 type 字段来表示将要执行的动作
import { SET_USER_INFO } from '../actions/user'

//初始化数据
const initialState = {
  name: '', //用户名称
  photo: '', //用户头像
  tips: 2 //提示信息
}


export default function todo(state = initialState, action) {
	//console.log(action.type);
	switch(action.type) {
		case SET_USER_INFO:
			return {
		      name : action.data.name,
		      phone : action.data.phone,
		      tips : action.data.tips,
		      tipsNumber : action.data.tipsNumber
		    };

		default : return state;
	}
}
