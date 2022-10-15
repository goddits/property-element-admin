import axios from '../request'

namespace ceshi {
  // 用户登录表单
  export interface LoginReqForm {
    email: string;
    password: string;
  }
  // 登录成功后返回的token
  export interface LoginResData {
    token: string;
  }
}

export const ceshi = () =>{
  return axios.get<ceshi.LoginResData>('users');
}
