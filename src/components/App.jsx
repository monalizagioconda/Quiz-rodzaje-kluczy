import { useState } from "react";
import { QuestionPage } from "./QuestionPage";
import { TitlePage } from "./TitlePage";
import { EndPage } from "./EndPage";

function App() {
  const [isStarted, setStarted] = useState(false);
  const [isEnded, setEnded] = useState(false);
  const [result, setResult] = useState(0);

  const handleStart = () => {
    setStarted(true);
  };

  const handleEnd = () => {
    setEnded(true);
  };

  const handleBack = () => {
    setStarted(false);
    setEnded(false);
    setResult(0);
  };

  return isStarted ? (
    isEnded ? (
      <EndPage onBack={handleBack} result={result} />
    ) : (
      <QuestionPage onEnd={handleEnd} setResult={setResult} />
    )
  ) : (
    <TitlePage onStart={handleStart} />
  );
}

export default App;
