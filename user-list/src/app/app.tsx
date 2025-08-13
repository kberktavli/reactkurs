import { useUsers } from "./useUsers";
import { useMovies } from "./useMovies";
//import { useEffect, useState } from "react";

const App = () => {
  const { data: users } = useUsers();
  const { data: movies } = useMovies();
  return (
    <>
      <ul>{users?.map((user) => <li>{user.name}</li>)}</ul>
      <ul>{movies?.map((movie) => <li>{movie.text}</li>)}</ul>
    </>
  );
};
export default App;

/* 
  //usss
  const [users, setUsers] = useState([]);
  //uffs
  useEffect(() => {
    const API_URL = "http://localhost:3001/users";
    fetch(API_URL)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);
*/
