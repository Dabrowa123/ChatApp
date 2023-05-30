import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { rootReducer } from "./reducers/rootReducer";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ThemeProvider } from "@mui/material/styles";
import MainTheme from "./Themes/MainTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { configureStore } from "@reduxjs/toolkit";

// const enhancers = compose(
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ThemeProvider theme={MainTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
