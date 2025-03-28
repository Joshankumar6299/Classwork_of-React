import * as React from 'react';
export const UserContext = React.createContext();

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Tanner' ,age: '19'});
    }, 1000);
  });
}

export function UserProvider({children}) { 
  const [user, setUser] = React.useState({

    name: "loading...",
    age:"loading...",
  });
    React.useEffect(() => {
        fetchUser().then((user) => setUser(user));
    }, []);
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

// export default UserContext;

