export const fetchGroupsDataRequest = () => {
  return {
    type: "FETCH_GROUPS_DATA_REQUEST",
  };
};

export const fetchGroupsDataSuccess = () => {
  return {
    type: "FETCH_GROUPS_DATA_SUCCESS",
  };
};

export const fetchGroupsDataFailure = (error) => {
  return {
    type: "FETCH_GROUPS_DATA_FAILURE",
    payload: error,
  };
};
