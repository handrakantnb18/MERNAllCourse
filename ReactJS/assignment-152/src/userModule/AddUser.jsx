import { useRef } from "react"

export default function AddUser(props) {

    const firstName = useRef();
    const lastName = useRef();
    const age = useRef();
    const country = useRef();
    
    const _onSubmitBtnClick = function() {
            const firstNameVal = firstName.current.value;
            const lastNameVal = lastName.current.value;
            const ageVal = age.current.value;
            const countryVal = country.current.value;

            props._onAddUserEvent ({
                firstName: firstNameVal, 
                lastName: lastNameVal, 
                age: ageVal, 
                country: countryVal
            });

            firstName.current.value = "";
            lastName.current.value = "";
            age.current.value = "";
            country.current.value = "";
    };

    return (
        <>
            <h2>Add User</h2><hr />
            <form>
                <div>
                    <label>First Name :</label>
                    <input 
                        type="text"
                        name="firstName" 
                        placeholder="Please enter first name" 
                        ref={firstName}
                        />
                </div>
                <div>
                    <label>Last Name :</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Please enter last name" 
                        ref={lastName}
                        />
                </div>
                <div>
                    <label>Age :</label>
                    <input 
                        type="text" 
                        name="age" 
                        placeholder="Please enter age" 
                        ref={age}
                        />
                </div>
                <div>
                    <label>Country :</label>
                    <input 
                        type="text" 
                        name="country" 
                        placeholder="Please enter country name" 
                        ref={country}
                        />
                </div>
                <button type="button" onClick={_onSubmitBtnClick}>
                    Add User
                    </button>
            </form>
        </>
    )
} 