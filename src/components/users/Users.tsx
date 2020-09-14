import React, { useState } from "react";

import AddUser from "./addUser/addUser";
import UserList from "./userList/userList";

export default function Users() {
  // *** State ***
  const [emails, setEmails] = useState<string[]>([
    "natan.colenberg@gmail.com",
    "john.due@gmail.com",
  ]);

  // *** Methods ***
  const addNewEmail = (email: string) => {
    const emailList = [...emails];
    emailList.push(email);
    setEmails(emailList);
    console.log(emails);
  };

  const removeEmail = (emailToRemove: string) => {
    const emailList = [...emails];
    const filteredList = emailList.filter((email) => email !== emailToRemove);
    setEmails(filteredList);
    console.log(emails);
  };

  // *** Render ***
  return (
    <div className="usersWrap">
      <h1>Users</h1>
      <AddUser onNewUser={(email: string) => addNewEmail(email)} />
      <UserList users={emails} onRemove={(userKey) => removeEmail(userKey)} />
    </div>
  );
}
