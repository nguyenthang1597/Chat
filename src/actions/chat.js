export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
export const RECEIVER = 'RECEIVER';
export const FILTER_BY_UID = 'FILTER_BY_UID';

export const addNewMessage = messages => {
  return {
    type: ADD_NEW_MESSAGE,
    messages
  }
}

export const addReceiver = user => {
  return {type: RECEIVER, user}
}

export const filterByUid = (from, to) => {
  return {type: FILTER_BY_UID, from, to};
}

