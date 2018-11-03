export const UPDATE_USER_STATE = 'UPDATE_USER_STATE';
export const UPDATE_DISPLAY_NAME = 'UPDATE_DISPLAY_NAME';


export const updateUserState = (ob) => {
  return {
    type: UPDATE_USER_STATE,
    ob
  }
}
export const updateDisplayName = (ob) => {
  return {
    type: UPDATE_DISPLAY_NAME,
    ob
  }
}