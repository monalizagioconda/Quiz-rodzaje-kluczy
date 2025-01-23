import { Button } from "./Button";

// eslint-disable-next-line react/prop-types
export function TitlePage({ onStart }) {
  return (
    <div className="background title-page">
      <main className="container">
        <h1>Quiz</h1>
        <h3>
          Narzędzia
          <br />
          Rodzaje kluczy
        </h3>
        <p>10 pytań</p>
        <p>
          Zaznacz jedną prawidłową odpowiedź.
          <br />
          Na końcu poznasz swój wynik.
        </p>
        <h3>Do dzieła!</h3>
        <Button onClick={onStart}>Start</Button>
      </main>
    </div>
  );
}
