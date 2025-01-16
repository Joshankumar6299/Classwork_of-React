import * as React from 'react';

function ApiCallSimulation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, user: 'Joshan kumar Kushwaha', name: ["Alice", "Bob", "Charlie", "Diana", "Ethan"] });
        }, 5000);
    });
}

function Exercise() {
    const [id, setId] = React.useState("loading...");
    const [user, setUser] = React.useState("loading...");
    const [name, setName] = React.useState("loading...");

    React.useEffect(() => {
        ApiCallSimulation().then((data) => {
            setId(data.id);
            setUser(data.name);
            setName(data.user);
        });
    }, []);

    return (
        <div>
            <h1>Id: {id}</h1>
            <h1>Name: {name}</h1>
            <h1>
                User:
                <ul>
                    {Array.isArray(user) && user.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </h1>
        </div>
    );
}

export default Exercise;