import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { motion } from "framer-motion";

import "./addUser.css";

type Props = {
  onNewUser: (email: string) => void;
};

export default function AddUser(props: Props) {
  // *** State ***
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  // *** Methods ***
  const addEmail = (email: string) => {
    if (!validateEmail(email)) return;
    props.onNewUser(email);
    setEmail("");
  };

  const isValidEmail = (email: string): boolean => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(String(email).toLowerCase());
    return isValid;
  };

  const validateEmail = (email: string): Boolean => {
    if (email === "") return true;

    const isValid = isValidEmail(email);

    if (isValid === false) {
      setEmailError(true);
      setEmailErrorMessage("Invalid Email Address");
      return false;
    }

    setEmailError(false);
    return true;
  };

  // *** Render ***
  return (
    <div className="addUserWrap">
      {/* Title */}
      <h3>Add a new User</h3>

      {/* Email */}
      <TextField
        className="addUserEmail"
        label={emailError ? emailErrorMessage : "Email"}
        required
        fullWidth
        error={emailError}
        value={email}
        onChange={(e) => {
          if (emailError) {
            setEmailError(false);
          }
          setEmail(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && validateEmail(email)) {
            addEmail(email);
          }
        }}
        onFocus={() => {
          if (emailError) {
            setEmailError(false);
          }
        }}
        onBlur={() => validateEmail(email)}
      />

      {/* Button */}
      <Button
        className="addUserButton"
        variant="contained"
        color="primary"
        onClick={() => addEmail(email)}
        disabled={!isValidEmail(email)}
      >
        Add
      </Button>
    </div>
  );
}
