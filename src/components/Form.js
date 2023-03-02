import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {//putting together the current form data into an object using the values stored in state.
      firstName: firstName,
      lastName: lastName,
    };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");// if we want to clear the input fields, all we need to do is set state!
    setLastName("");
  }


  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });


  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
