import React from "react";

import { Question } from "../../../../models/models";

import "./questionRow.css";

type Props = {
  question: Question;
};

export default function QuestionRow(props: Props) {
  return (
    <div className="questionRowWrap">
      {/* Question */}
      <div className="questionRowText">
        {props.question.index}. {props.question.Text}
      </div>

      {/* Answers */}
      <div className="questionWrapAnswers">
        {props.question.Answers.map((a) => {
          return (
            <div className="questionRowAnswer">
              {a.index}. {a.Text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
