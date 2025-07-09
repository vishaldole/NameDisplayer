import { useState } from "react";

export default function Displayer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    setFullName(`${firstName} ${lastName}`);
  }

  return (
    <>
      <h1>Full Name Display</h1>
      <form
        style={{ paddingTop: "20px", display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <button style={{ width: "70px" }}>Submit</button>
      </form>
      {fullName ? (
        <div>
          <p>Full Name: {fullName}</p>
        </div>
      ) : null}
    </>
  );
}
