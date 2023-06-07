export const chatGroupsReducer = (
  state = {
    isGroupsLoading: true,
    isGroupLoading: true,
  },
  action
) => {
  switch (action.type) {
    case "FETCH_GROUP_DATA_REQUEST":
      return {
        ...state,
        isGroupLoading: true,
      };
    case "FETCH_GROUP_DATA_SUCCESS":
      return {
        ...state,
        isGroupLoading: false,
        users: action.payload,
      };
    case "FETCH_GROUP_DATA_FAILURE":
      return {
        ...state,
        isGroupLoading: false,
        error: action.payload,
      };
    case "FETCH_GROUPS_DATA_REQUEST":
      return {
        ...state,
        isGroupsLoading: true,
      };
    case "FETCH_GROUPS_DATA_SUCCESS":
      return {
        ...state,
        isGroupsLoading: false,
        users: action.payload,
      };
    case "FETCH_GROUPS_DATA_FAILURE":
      return {
        ...state,
        isGroupsLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
