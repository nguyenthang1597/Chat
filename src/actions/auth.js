export const SET_AUTH = 'SET_AUTH'

export const setUser = (token, user) => {
  return {
    type: SET_AUTH,
    user,
    token
  }
}