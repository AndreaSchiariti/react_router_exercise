import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { Counter } from "./components/Counter";
import { useRef, useState } from "react";
import { ShowGithubUser } from "./components/ShowGithubUser";

function App() {
  const userRef = useRef(null);
  const navigate = useNavigate();

  function handleSearchUser() {
    if (userRef.current?.value) {
      navigate(`/users/${userRef.current.value}`);
    }
  }

  return (
    <>
      <div>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{" "}
        <Link to="users/AndreaSchiariti">Andrea's Account</Link> | {" "}
        <input type="text" placeholder="Search your username!" ref={userRef} />{" "}
        <button onClick={handleSearchUser}>Search</button>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name="Andrea" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </>
  );
}

export default App;
