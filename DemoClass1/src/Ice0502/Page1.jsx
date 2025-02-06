import React from "react";

function fetchUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ Principle: '10000',rate_of_interest: '7',Duration:'1',});
      }, 1000);
    });
  }
  export function UserProvider({children}) { 
    const [user, setUser] = React.useState({
  
     Principle: "loading...",
     rate_of_interest:"loading...",
     Duration :"loading...",
     
    });
      React.useEffect(() => {
          fetchUser().then((user) => setUser(user));
      }, []);
      return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  }