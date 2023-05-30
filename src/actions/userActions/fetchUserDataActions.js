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

export const fetchUserDataFailure = (error) => {
  return {
    type: "FETCH_USER_DATA_FAILURE",
    payload: error,
  };
};
