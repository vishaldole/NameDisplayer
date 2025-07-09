import { useState } from "react";

export default function Displayer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName.trim()} ${lastName.trim()}`);
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setIsSubmitted(false);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setIsSubmitted(false);
  };

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
            onChange={handleFirstNameChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </label>
        <button type="submit" style={{ width: "70px" }}>
          Submit
        </button>
      </form>

      {isSubmitted && (
        <div>
          <p>Full Name: {fullName}</p>
        </div>
      )}
    </>
  );
}
