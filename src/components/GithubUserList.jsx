import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser() {
    setError(null);
    /* Lo risettiamo in modo tale che al cambio utente siamo sicuri che l'errore venga resettato*/
    setLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users`);
      const json = await response.json();

      if (response.status !== 200) {
        setError(new Error("Can't fetch the users"));
      }

      setUsers(json);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUser();
  }, []);

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {users && !error && (
        <>
          <ul>
            {users.map((user) => (
              <li key={user.login}>
                <Link to={`/users/${user.login}`}>{user.login}</Link>
              </li>
            ))}
          </ul>

          <Outlet />
        </>
      )}
    </>
  );
}
