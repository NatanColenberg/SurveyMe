import React from "react";

import UserRow from "./userRow/userRow";

type Props = {
  users: string[];

  onRemove: (userKey: string)=>void;
};

export default function UserList(props: Props) {
  return (
    <div className="userListWrap">
      <h3>User List</h3>
      {props.users.length > 0
        ? props.users.map((user, index) => (
            <UserRow
              index={index}
              email={user}
              onRemove={props.onRemove}
            />
          ))
        : "- No Users -"}
    </div>
  );
}
