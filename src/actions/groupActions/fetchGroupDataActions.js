export const fetchGroupDataRequest = () => {
  return {
    type: "FETCH_GROUP_DATA_REQUEST",
  };
};

export const fetchGroupDataSuccess = () => {
  return {
    type: "FETCH_GROUP_DATA_SUCCESS",
  };
};

export const fetchGroupDataFailure = (error) => {
  return {
    type: "FETCH_GROUP_DATA_FAILURE",
    payload: error,
  };
};
