export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";


export const userLogin = (user) => {
  return {
    type: USER_LOGIN,
    user
  }
}

export const userLogout = (uid) => {
  return {
    type: USER_LOGOUT,
    uid
  }
}