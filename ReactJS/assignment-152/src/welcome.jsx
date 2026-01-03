import { useEffect } from "react";
import { useState } from "react";

function ChildComponent() {

    const [count, setCount] = useState(0);
    
    useEffect( function() {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(httpResponce => httpResponce)
        .then((resp) => {console.log(resp)})
        .catch(error => console.log(error));
    }, [count])
    

    return (
        <>
            <p>count is {count}</p>
            <button type="button" onClick={ () => { setCount (count + 1)}}>Increment</button>
            <button type="button" onClick={ () => { setCount (count - 1)}}>decrement</button>

        </>
    )
}

export default function Welcome() {

    return (
        <>
            <ChildComponent />
            <ChildComponent />
        </>
    )
}