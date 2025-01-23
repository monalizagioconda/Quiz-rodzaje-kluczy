import { Button } from "./Button";

// eslint-disable-next-line react/prop-types
export function EndPage({ result, onBack }) {
  return (
    <div className="background question-page">
      <main className="container">
        <p>
          GRATULACJE!
          <br />
          Twój wynik to:
        </p>
        <h3>{result}/10</h3>
        <p>
          Chcesz spróbować jeszcze raz?
          <br />
          Kliknij przycisk poniżej
        </p>
        <Button onClick={onBack}>Back to Start</Button>
      </main>
    </div>
  );
}
