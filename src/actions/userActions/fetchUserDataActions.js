export const fetchUserDataRequest = () => {
  return {
    type: "FETCH_USER_DATA_REQUEST",
  };
};

export const fetchUserDataSuccess = (data) => {
  return {
    type: "FETCH_USER_DATA_SUCCESS",
    payload: data,
  };
};

export const fetchUserWebsocket = (data) => {
  return {
    type: "FETCH_USER_WEBSOCKET",
    payload: data,
  };
};

export const fetchUserWebsocketRegister = (data) => {
  return {
    type: "FETCH_USER_WEBSOCKET_REGISTER",
    payload: data,
  };
};

export const fetchUserDataFailure = (error) => {
  return {
    type: "FETCH_USER_DATA_FAILURE",
    payload: error,
  };
};
