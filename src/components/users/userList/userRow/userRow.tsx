import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { DeleteForever, Edit } from "@material-ui/icons";

import "./userRow.css";

type Props = {
  index: number;
  email: string;

  onRemove: (userEmail: string) => void;
};

export default function UserRow(props: Props) {
  // *** State ***
  const [deleteHover, setDeleteHover] = useState(false);
  const [editHover, setEditHover] = useState(false);

  // Set CSS Classes
  let userRowClasses = "userRowWrap ";
  userRowClasses += deleteHover ? "userDeletedHover " : "";
  userRowClasses += editHover ? "userEditHover " : "";

  // *** Methods ***
  const TrimmedEmail = (email: string) => {
    const EMAIL_MAX_LEN = 30;

    return email.length >= EMAIL_MAX_LEN ? (
      <p title={props.email}>
        {props.email.substring(0, EMAIL_MAX_LEN) + "..."}
      </p>
    ) : (
      <p>props.email</p>
    );
  };

  return (
    <div>
      <AnimatePresence>
        <motion.div
          className={userRowClasses}
          initial={{ opacity: 0, x: "-30vw" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: 200, scale: 2 }}
        >
          <div className="userRowText">
            {props.index + 1}. {TrimmedEmail(props.email)}
          </div>
          <div className="userRowIconsWrap">
            {/* Edit Icon */}
            <Edit
              className="userRowIcon userRowEditIcon"
              fontSize="large"
              onMouseEnter={(e) => {
                setEditHover(true);
              }}
              onMouseLeave={(e) => {
                setEditHover(false);
              }}
            />

            {/* Delete Icon */}
            <DeleteForever
              className="userRowIcon userRowRemoveIcon"
              fontSize="large"
              onClick={() => {
                props.onRemove(props.email);
              }}
              onMouseEnter={(e) => {
                setDeleteHover(true);
              }}
              onMouseLeave={(e) => {
                setDeleteHover(false);
              }}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
