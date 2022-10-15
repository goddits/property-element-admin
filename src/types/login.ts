// 登录版块
// 登录信息
export interface LoginParams{
  email:string;
  password:string;
  verification?:string | number;
}