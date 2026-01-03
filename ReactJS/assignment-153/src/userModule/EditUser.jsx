import { useEffect, useRef } from "react";

export default function EditUser(props) {
  const firstName = useRef();
  const lastName = useRef();
  const age = useRef();
  const country = useRef();

  useEffect(
    function () {
      const currentUser = props.currentUser;
      firstName.current.value = currentUser.firstName;
      lastName.current.value = currentUser.lastName;
      age.current.value = currentUser.age;
      country.current.value = currentUser.country;
    },
    [props.currentUser]
  );

  const _onSubmitBtnClick = function () {
    const firstNameVal = firstName.current.value;
    const lastNameVal = lastName.current.value;
    const ageVal = age.current.value;
    const countryVal = country.current.value;

    props._onUpdateUserEvent({
      firstName: firstNameVal,
      lastName: lastNameVal,
      age: ageVal,
      country: countryVal,
    });

    firstName.current.value = "";
    lastName.current.value = "";
    age.current.value = "";
    country.current.value = "";
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="card bg-body-tertiary">
            <div className="card-body">
              <h3>Edit user</h3>
              <hr />
              <form>
                <div className="mb-2">
                  <label>First name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    ref={firstName}
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <label>Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    ref={lastName}
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <label>Age</label>
                  <input
                    type="text"
                    name="age"
                    placeholder="Enter your age"
                    ref={age}
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <label>Country</label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Enter your country"
                    ref={country}
                    className="form-control"
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-success"
                    type="button"
                    onClick={_onSubmitBtnClick}
                  >
                    Update User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
