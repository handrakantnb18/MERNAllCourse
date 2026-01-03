import { useEffect } from "react";
import { useState } from "react";

function ChildComponent() {

    const [data, setData] = useState(0);
    const [loading, setLoading] = useState(true);
    
    useEffect( function() {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(httpResponce => httpResponce.json())
        .then((resp) => {
            setData(resp);
            console.log(resp);
            setLoading(false);
        })
        .catch(error => console.log(error));
    }, [])
    
    return(
        <>
        {loading ? "Loading..." : 
        (
              <ul>
                {data.map(function (item, index){
                    return (
                        <li key={index}>
                            {item.name} {item.email}
                        </li>
                    );
                })}
            </ul>
        )
        }       
        </>
    )
}

export default function Welcome() {
    return (
        <>
            <ChildComponent />         
        </>
    )
}