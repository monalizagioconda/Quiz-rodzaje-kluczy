import { Button } from "./Button";

// eslint-disable-next-line react/prop-types
export function TitlePage({ onStart }) {
  return (
    <div className="page title-page background">
      <main>
        <h1>Quiz</h1>
        <section>
          <p>10 pytań o tematyce:</p>
          <h3>
            Narzędzia
            <br />
            Rodzaje kluczy
          </h3>
          <p>
            Zaznacz jedną prawidłową odpowiedź
            <br />
            Na końcu poznasz swój wynik
          </p>
          <p className="cta-text">Do dzieła!</p>
        </section>

        <Button onClick={onStart}>Start</Button>
      </main>
    </div>
  );
}
