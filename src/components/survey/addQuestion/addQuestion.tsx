import React, { useState } from "react";

import Answers from "./answers/answers";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Question, Answer } from "../../../models/models";

import "./addQuestion.css";

type Props = {
  addQuestion: (question: Question) => void;
};

export default function AddQuestion(props: Props) {
  // *** State ***
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState<Answer[]>([]);

  // *** Methods ***
  const addNewAnswer = (answer: Answer) => {
    const ans = [...answers];
    ans.push(answer);
    setAnswers(ans);
  };

  const updateAnswer = (answer: Answer) => {
    let ans = [...answers];

    // If Text is empty Remove answer
    if (answer.Text === "") {
      removeAnswer(answer);
      return;
    }

    // If Text is not empty Update answer
    const ansToUpdate = ans.find((a) => a.index === answer.index);
    if (ansToUpdate) {
      ansToUpdate.Text = answer.Text;
      setAnswers(ans);
    }
  };

  const removeAnswer = (answer: Answer) => {
    let ans = [...answers];
    ans = ans.filter((a) => a.index != answer.index);
    ans.forEach((a, index) => (a.index = index + 1));
    setAnswers(ans);
  };

  const isQuestionValid = () => {
    return question !== "" && answers !== null && answers.length > 1;
  };

  const addQuestion = () => {
    const que: Question = { index: 0, Text: question, Answers: answers };
    props.addQuestion(que);
    setQuestion("");
    setAnswers([]);
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
      <Answers
        answers={answers}
        addNewAnswer={addNewAnswer}
        updateAnswer={updateAnswer}
      />

      {/* Add Button */}
      <Button
        className="addUserButton"
        variant="contained"
        color="primary"
        onClick={() => addQuestion()}
        disabled={!isQuestionValid()}
      >
        Add
      </Button>
    </div>
  );
}
