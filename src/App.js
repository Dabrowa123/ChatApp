import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";
import Protected from "./components/Protected";

function App() {
  const isLoggedIn = false;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={Login}></Route>
          <Route
            exact
            path="/adminpanel"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <AdminPanel />
              </Protected>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
