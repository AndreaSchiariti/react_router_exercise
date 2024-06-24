import { useParams } from "react-router-dom";

export function Welcome({ name = "dear User" }) {
  return (
    <div className="welcome">
      <h1>
        Welcome, <strong>{name}</strong>!
      </h1>
    </div>
  );
}
