import React, { useState } from "react";

// *** Material-UI ***
import TextField from "@material-ui/core/TextField";

// *** Models ***
import { Answer } from "../../../../models/models";

// *** CSS ***
import "./answers.css";

type Props = {
  answers: Answer[];
  addNewAnswer: (answer: Answer) => void;
  updateAnswer: (answer: Answer) => void;
};

export default function Answers(props: Props) {
  // *** State ***
  const [newAnswer, setNewAnswer] = useState("");

  // *** Methods ***
  const addNewAnswer = () => {
    const answer: Answer = { Text: newAnswer, index: props.answers.length + 1 };
    props.addNewAnswer(answer);
    setNewAnswer("");
  };

  const updateAnswer = (answer: Answer) => {
    props.updateAnswer(answer);
  };

  // *** Render ***
  return (
    <div className="answersWrap">
      {/* Existing Answers */}
      {props.answers.map((answer) => {
        return (
          <div className="answerWrap" key={answer.index}>
            {/* Index */}
            <div className="answerIndex">{answer.index} .</div>

            {/* Text */}
            <div className="answerField">
              <TextField
                className="answerField"
                required
                fullWidth
                value={answer.Text}
                onChange={(e) => {
                  const ansToUpdate: Answer = {
                    Text: e.target.value,
                    index: answer.index,
                  };
                  updateAnswer(ansToUpdate);
                }}
              />
            </div>
          </div>
        );
      })}

      {/* New Answer */}
      <div className="answerWrap">
        {/* Index */}
        <div className="answerIndex">{props.answers.length + 1} .</div>

        {/* Text */}
        <div className="answerField">
          <TextField
            className="answerField"
            label={"Answer"}
            required={props.answers.length === 0}
            fullWidth
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            onBlur={(e) => {
              if (newAnswer !== "") {
                addNewAnswer();
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && newAnswer !== "") {
                addNewAnswer();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
