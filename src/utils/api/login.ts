import axios from "../request";

namespace Login {
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

// 用户登录

export const login = (params:Login.LoginReqForm) =>{
  return axios.post<Login.LoginResData>('/user/login',params);
}