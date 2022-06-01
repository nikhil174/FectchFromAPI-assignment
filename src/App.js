import "./App.css";
import { useState, useEffect } from "react";
import ListUser from "./components/ListUser";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchDataHandler();
  // }, []);

  const fetchDataHandler = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const transformedData = data.map((userData) => {
        return {
          id: userData.id,
          username: userData.username,
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
        };
      });
      setUsers(transformedData);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };
  return (
    <div className="app">
      <div className="btn">
        <button onClick={fetchDataHandler}>Fetch Users</button>
      </div>
      <div className="usercontainer">
        {!isLoading &&
          users.length > 0 &&
          users.map((user) => <ListUser key={user.id} user={user} />)}
        {!isLoading && users.length === 0 && !error && <p>No users found</p>}
        {!isLoading && error && <p>error occured</p>}
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
