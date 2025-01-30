import * as React from 'react';
import Promise from 'bluebird';
import { useState } from 'react';
import { useEffect } from 'react';

Promise.config({cancellation:true});

function Fetchuser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, user: 'Joshan kumar Kushwaha'});
        }, 5000);
    });
}

function CnacelRequest(){
    const [user,setUser] = useState("Loading...");
    const [id,setId] = useState("Loading...");
    
    useEffect(() => {
        const promise = Fetchuser().then((var1) => {
            setUser(var1.user);
            setId(var1.id);
        });

        return () => {
            promise.cancel();
        }
    });
    return(
        <div>
            User Id:{id}
            <br />
            User Name:{user}
        </div>
    )
}

export default CnacelRequest