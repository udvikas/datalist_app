import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAgconste] = useState("");
  const [error, setError] = useState();

 const nameInputRefs = useRef()
 const ageInputRefs = useRef()
 const collegeInputRefs = useRef()
 
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRefs.current.value;
    const enteredUserAge = ageInputRefs.current.value;
    const enteredCollege = collegeInputRefs.current.value;

    if (enteredName.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name (Non-empty value)",
      });
      return;
    }

    if (enteredUserAge.trim().length === 0 ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age  (Non-empty value)",
      });
      return;
    }
   if (enteredCollege.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid college Name (Non-empty value)",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age ( > 0).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge, enteredCollege);
    // setEnteredUsername("");
    // setEnteredAge("");
    nameInputRefs.current.value = "";
    ageInputRefs.current.value = "";
    collegeInputRefs.current.value = "";
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRefs}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRefs}
          />
           <label htmlFor="collegename">College Name</label>
          <input
            id="collegename"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={collegeInputRefs}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
