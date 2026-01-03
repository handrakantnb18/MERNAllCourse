import { useState } from "react";

function ChildComponent() {

    const [count, setCount] = useState(0); 

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