import React, { useState } from "react";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import "./userRow.css";

type Props = {
  index: number;
  email: string;

  onRemove: (userEmail: string) => void;
};

export default function UserRow(props: Props) {
  return (
    <div className="userRowWrap">
      {props.index + 1}. {props.email}{" "}
      <DeleteForeverIcon
        className="userRowRemoveIcon"
        fontSize="large"
        onClick={() => {
          props.onRemove(props.email);
        }}
      />
    </div>
  );
}
