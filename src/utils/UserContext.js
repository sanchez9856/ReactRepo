import { createContext } from "react";

const UserContext = createContext({
  username: "Sanchayan",
  email: "xyz@gmail.com",
});

export default UserContext;
