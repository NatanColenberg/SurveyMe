import React from "react";

import QuestionRow from "./questionRow/questionRow";

import { Question } from "../../../models/models";

import "./questionsList.css";

type Props = {
  questions: Question[];
};

export default function QuestionsList(props: Props) {
  return (
    <div className="questionListWrap">
      <h3>Question List</h3>
      {props.questions.map((q) => {
        return <QuestionRow question={q} />;
      })}
    </div>
  );
}
