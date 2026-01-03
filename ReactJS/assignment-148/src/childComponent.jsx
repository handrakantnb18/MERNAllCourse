
export default function childComponent(props) {
    return (

        <>
        <h1>This is the child Component</h1>
        <p>First Name: { props.firstName }</p>
            <p>Last Name: { props.lastName }</p>
        </>
    );
       
}