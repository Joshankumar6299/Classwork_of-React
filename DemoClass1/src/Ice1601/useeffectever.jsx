import * as React from 'react';
function ApiCallSimulation(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id : 1, name : 'Joshan kumar Kushwaha' });
        }, 5000);
    })
}
function ApiTesting(){
    const [id, setId] = React.useState("loading...");
    const [name, setname] = React.useState("loadingq...");
    React.useEffect(() => {
        ApiCallSimulation().then((user) => {
            setId(user.id);
            setname(user.name);
        })
    });
    return (
        <div>
            <h1>Id : {id}</h1>
            <h1>User : {name}</h1>
        </div>
    );
}
export default ApiTesting;