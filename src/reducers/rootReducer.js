import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { isLoggedReducer } from "./isLoggedReducer";
import { chatGroupsReducer } from "./chatGroupsReducer";
import { currentGroupReducer } from "./currentGroupReducer";
import { currentPickedUserReducer } from "./currentPickedUserReducer";
import { searchGroupReducer } from "./searchGroupReducer";
import { searchUserReducer } from "./searchUserReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  chatGroups: chatGroupsReducer,
  isLogged: isLoggedReducer,
  currentGroup: currentGroupReducer,
  currentPickedUser: currentPickedUserReducer,
  searchGroup: searchGroupReducer,
  searchUser: searchUserReducer,
});
