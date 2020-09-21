import React, { useState } from "react";

import AddQuestion from "./addQuestion/addQuestion";
import QuestionList from "./questionsList/questionsList";

import { Question } from "../../models/models";

export default function Survey() {
  // *** State ***
  const [questions, setQuestions] = useState<Question[]>([
    {
      index: 1,
      Text: "What do you want to have for dinner?",
      Answers: [
        { index: 1, Text: "Pasta" },
        { index: 2, Text: "Pizza" },
        { index: 3, Text: "Hamburger" },
      ],
    },
    {
      index: 2,
      Text: "What movie do you want to see?",
      Answers: [
        { index: 1, Text: "The Shawshank Redemption" },
        { index: 2, Text: "The Godfather" },
        { index: 3, Text: "The Lord of the Rings" },
      ],
    },
  ]);

  // *** Methods ***
  const addQuestion = (question: Question) => {
    const ques = [...questions];
    question.index = ques.length + 1;
    ques.push(question);
    setQuestions(ques);
  };

  // *** Render ***
  return (
    <div className="surveyWrap">
      <h1>Survey</h1>
      <AddQuestion addQuestion={addQuestion} />
      <QuestionList questions={questions} />
    </div>
  );
}
