import http from "./httpService";
import jwtDecode from "jwt-decode";
import { apiUrl } from "../../utils/config.json";

const apiEndPoint = apiUrl + "/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export function loginWithJwt(jwt) {
  localStorage.setItem(jwt);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export async function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
};
