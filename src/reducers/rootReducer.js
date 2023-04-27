import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { isLoggedReducer } from "./isLoggedReducer";
import { chatGroupsReducer } from "./chatGroupsReducer";
import { currentGroupReducer } from "./currentGroupReducer";
export const rootReducer = combineReducers({
  users: usersReducer,
  chatGroups: chatGroupsReducer,
  isLogged: isLoggedReducer,
  currentGroup: currentGroupReducer,
});
