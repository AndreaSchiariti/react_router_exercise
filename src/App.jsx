import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { Counter } from "./components/Counter";
import { useRef } from "react";
import { ShowGithubUser } from "./components/ShowGithubUser";
import { ReactRouterEx6 } from "./components/ReactRouterEx6";
import { GithubUser } from "./components/GithubUser";
import { GithubUserList } from "./components/GithubUserList";

function App() {
  const userRef = useRef(null);
  const navigate = useNavigate();

  function handleSearchUser(event) {
    event.preventDefault();
    if (userRef.current?.value) {
      navigate(`/users/${userRef.current.value}`);
    }
  }

  return (
    <>
      <div>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{" "}
        <Link to="users/AndreaSchiariti">Andrea's Account</Link> |{" "}
        <Link to="users/">Github User List (Exercise 6)</Link> |{" "}
        <form onSubmit={handleSearchUser}>
          <input
            type="text"
            placeholder="Search your username!"
            ref={userRef}
          />{" "}
          <button>Search</button>
        </form>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name="Andrea" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="users" element={<GithubUserList />}>
          <Route path=":username" element={<ShowGithubUser />} />
          <Route
            index
            element={
              <div>
                <h4>Add a user and select it</h4>
              </div>
            }
          />
        </Route>
        <Route path="*" element={<h2>Sorry, page not found</h2>} />
      </Routes>
    </>
  );
}

export default App;
