import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then(res => res.json())
    .then(data => setDirectors(data))
    .then(error => console.log(error))
  }, [])
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors && directors.map(director => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              <li>
              {director.movies}
              </li>
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
