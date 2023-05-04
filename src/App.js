import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Protected from "./components/Protected";
import Register from "./components/Register";
import { useSelector } from "react-redux";
import AppPanel from "./components/AppPanel/AppPanel";

function App() {
  const userId = useSelector((state) => state.isLogged.userId);
  const users = useSelector((state) => state.users);
  let isAdmin = false;
  let isLogged = false;

  if (userId !== 0) {
    const filteredUser = users.filter((user) => user.userId === userId);
    if (filteredUser.length !== 0) {
      isLogged = true;
    }
    isAdmin = filteredUser[0].isAdmin;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={Login}></Route>
          <Route
            exact
            path="/appPanel"
            element={
              <Protected isLoggedIn={isLogged}>
                <AppPanel />
              </Protected>
            }
          ></Route>
          <Route exact path="/register" Component={Register}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
