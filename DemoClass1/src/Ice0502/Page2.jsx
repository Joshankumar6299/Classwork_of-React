import React from "react";
import { UserContext } from "./Page1";


function Page2(){
    const user = React.useContext(UserContext);
    return (
        <div>
            <h1>User Details</h1>
            <p>Principle:{user.Principle}</p>
            <p>rate_of_interest:{user.rate_of_interest}</p>
            <p>Duration:{user.Duration}</p>
        </div>
    );
}
