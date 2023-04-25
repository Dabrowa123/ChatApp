import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";
import Protected from "./components/Protected";
import UserPanel from "./components/UserPanel";
import { useSelector } from "react-redux";

function App() {
  const userId = useSelector((state) => state.isLogged.userId);
  console.log(userId);
  const users = useSelector((state) => state.users);
  console.log(users);
  let isAdmin = false;
  let isLogged = false;

  if (userId !== 0) {
    const filteredUser = users.filter((user) => user.userId == userId);
    if (filteredUser.length !== 0) {
      isLogged = true;
    }
    isAdmin = filteredUser[0].isAdmin;
    console.log("Is Logged? " + isLogged);
    console.log("Is Admin? " + isAdmin);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={Login}></Route>
          <Route
            exact
            path="/adminPanel"
            element={
              <Protected isLoggedIn={isAdmin && isLogged}>
                <AdminPanel />
              </Protected>
            }
          ></Route>
          <Route
            exact
            path="/userPanel"
            element={
              <Protected isLoggedIn={isLogged}>
                <UserPanel />
              </Protected>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
