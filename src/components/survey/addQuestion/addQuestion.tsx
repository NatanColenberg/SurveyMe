import React, { useState } from "react";

import Answers from "./answers/answers";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Question, Answer } from "../../../models/models";

import "./addQuestion.css";

export default function AddQuestion() {
  // *** State ***
  const [question, setQuestion] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [answers, setAnswers] = useState<Answer[]>([]);

  // *** Methods ***
  const addNewAnswer = (answer: Answer) => {
    const ans = [...answers];
    ans.push(answer);
    setAnswers(ans);
  };

  const updateAnswer = (answer: Answer) => {
    const ans = [...answers];
    const ansToUpdate = ans.find((a) => a.index === answer.index);
    if (ansToUpdate) {
      ansToUpdate.Text = answer.Text;
      setAnswers(ans);
    }
  };

  return (
    <div className="addQuestionWrap">
      {/* Title */}
      <h3>Add a new Question</h3>

      {/* Question */}
      <TextField
        className="addQuestionField"
        label={"Question"}
        required
        fullWidth
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      {/* Answers */}
      <Answers answers={answers} addNewAnswer={addNewAnswer} updateAnswer={updateAnswer}/>

      {/* Add Button */}
      <Button
        className="addUserButton"
        variant="contained"
        color="primary"
        // onClick={() => addEmail(email)}
      >
        Add
      </Button>
    </div>
  );
}
