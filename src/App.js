import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [result, setResult] = useState([]);
  const api_url = "https://localhost:5001/api/users";

  useEffect(() => {
    const getUsers = () => {
      fetch(api_url)
        .then((res) => res.json())
        .then((json) => {
          console.log("json result: ", json);
          setResult(json);
        })
        .catch((error) => {
          console.error("opps error in fetching api", error);
        });
    };
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>Mentor App</h1>
      {result.map((u) => (
        <li key={u.id}>
          {u.id} - {u.userName}
        </li>
      ))}
    </div>
  );
}

export default App;
