import { Button } from "./Button";

// eslint-disable-next-line react/prop-types
export function EndPage({ result, onBack }) {
  return (
    <div className="page end-page background">
      <main>
        <section>
          <h3 className="title">Gratulacje!</h3>
          <p>Twój wynik to:</p>

          <h3>{result}/10</h3>
          <p>
            Chcesz spróbować jeszcze raz?
            <br />
            Kliknij przycisk poniżej
          </p>
        </section>
        <Button onClick={onBack}>Back to Start</Button>
      </main>
    </div>
  );
}
