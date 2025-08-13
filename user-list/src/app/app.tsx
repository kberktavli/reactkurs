import { useUsers } from "./useUsers";
//import { useEffect, useState } from "react";

const App = () => {
  const { data: users } = useUsers();
  return <ul>{users?.map((user) => <li>{user.name}</li>)}</ul>;
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
