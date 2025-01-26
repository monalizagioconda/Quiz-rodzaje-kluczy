import { RadioButton } from "primereact/radiobutton";
import { useRef, useState } from "react";
import questions from "../models/questions";
import { Button } from "./Button";

// eslint-disable-next-line react/prop-types
export function QuestionPage({ onEnd, setResult }) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(undefined);
  const formRef = useRef();
  const question = questions[activeQuestion];
  const isLastQuestion = activeQuestion === 9;

  const handleSubmit = e => {
    e.preventDefault();
    isLastQuestion ? handleEndBtn() : handleNextBtn();
  };

  const submitAnswer = () => {
    if (selectedAnswer !== undefined && selectedAnswer === question.correctAnswer) {
      setResult(result => result + 1);
    }

    setSelectedAnswer(undefined);

    formRef.current.reset();
  };

  const handleNextBtn = () => {
    setActiveQuestion(activeQuestion => activeQuestion + 1);
    submitAnswer();
  };

  const handleAnswerChange = ({ target }) => {
    setSelectedAnswer(parseInt(target.value));
  };

  const handleEndBtn = () => {
    submitAnswer();
    onEnd();
  };

  return (
    <div className="page question-page background">
      <main>
        <section>
          <div className="counter">
            <span>{(activeQuestion < 9 ? "0" : "") + (activeQuestion + 1)}</span>/10
          </div>
          <img src={question.img} alt="assembly keys" />
        </section>

        <form className="choices" ref={formRef} onSubmit={handleSubmit}>
          <ul>
            {question.choices.map((answer, idx) => {
              const isSelected = selectedAnswer === idx;
              const id = `answer-${idx}`;

              return (
                <li key={idx} className={isSelected ? "selected" : undefined}>
                  <RadioButton
                    inputId={id}
                    name="answer"
                    value={idx}
                    onChange={handleAnswerChange}
                    checked={isSelected}
                  />
                  <label htmlFor={id}>{answer}</label>
                </li>
              );
            })}
          </ul>
          <Button>{isLastQuestion ? "End" : "Next"}</Button>
        </form>
      </main>
    </div>
  );
}
