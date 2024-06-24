import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(username) {
    setError(null);
    /* Lo risettiamo in modo tale che al cambio utente siamo sicuri che l'errore venga resettato*/
    setLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();

      if (response.status !== 200) {
        setError(new Error("There was an issue"));
      }
      
      setData(json);
    } catch (error) {
      setError(error);
      setData(null);

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUser(username);
  }, [username]);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {data && !error && (<>
          <h2>{data.name}</h2>
          <p>{data.login}</p>
          <img src={data.avatar_url} alt="Avatar User" />
          </>
      )}
    </div>
  );
}
