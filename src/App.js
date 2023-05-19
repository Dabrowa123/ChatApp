import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Protected from "./components/Protected";
import Register from "./components/Register";
import { useSelector } from "react-redux";
import AppPanel from "./components/AppPanel/AppPanel";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDataSuccess } from "./actions/userActions/fetchUserDataActions";
import { fetchDataFailure } from "./actions/userActions/fetchUserDataActions";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={Login}></Route>
          <Route exact path="/appPanel" element={<AppPanel />}></Route>
          <Route exact path="/register" Component={Register}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
