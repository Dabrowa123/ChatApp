import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { isLoggedReducer } from "./isLoggedReducer";
export const rootReducer = combineReducers({
  users: usersReducer,
  isLogged: isLoggedReducer
});
