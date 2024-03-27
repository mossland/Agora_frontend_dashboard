import { useState, useEffect } from "react";

function Users() {

  const [users, setUsers] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
        try {
          //const response = await 
          //setUsers(response);
        } catch (error) {
          console.error(error);
        }
    };
    getUsers();
  }, []);

  return <h1>Users</h1>;
}

export default Users;
