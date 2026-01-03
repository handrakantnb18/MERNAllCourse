
export default function ShowUser(props) {
    const userData = props.usersData;
    return(
        <>
            <h2> Show Users </h2> <hr />
            {
                userData && userData.length ?
                (
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Country</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map(function(item, index) {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.age}</td>
                                            <td>{item.country}</td>
                                            <td>Action</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                ) : "No user found"
            }
        </>
    )
}