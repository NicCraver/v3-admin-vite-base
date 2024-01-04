import { request } from "@/utils/service"
import type * as Login from "./types/login"

/** 获取登录验证码 */
export function getLoginCodeApi() {
  return request<Login.LoginCodeResponseData>({
    url: "login/code",
    method: "get"
  })
}

/** 登录并返回 Token */
// export function loginApi(data: Login.LoginRequestData) {
//   return request<Login.LoginResponseData>({
//     url: "users/login",
//     method: "post",
//     data
//   })
// }
export function loginApi() {
  return { data: { token: "token-admin" }, code: 0, message: "登录成功" }
  // return request<Login.LoginResponseData>({
  //   url: "users/login",
  //   method: "post",
  //   data
  // })
}

/** 获取用户详情 */
// export function getUserInfoApi() {
//   return request<Login.UserInfoResponseData>({
//     url: "users/info",
//     method: "get"
//   })
// }
export function getUserInfoApi() {
  return { data: { username: "admin", roles: ["admin"] }, code: 0, message: "获取用户详情成功" }
}
