import { PrimeReactProvider } from "primereact/api";
import { Quiz } from "./Quiz";

function App() {
  return (
    <PrimeReactProvider>
      <Quiz />
    </PrimeReactProvider>
  );
}

export default App;
