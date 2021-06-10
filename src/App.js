import { useState } from "react";

function App() {
  let [valor, setValor] = useState(0);
  const sumar = () => {
    if (valor === 10) {
      return;
    }
    setValor(++valor);
  };
  const restar = () => {
    if (valor === 0) {
      return;
    }
    setValor(--valor);
  };

  return (
    <>
      <div className="row align-items-center">
        <span className="col-4 btn btn-info caja" onClick={restar}>
          -
        </span>
        <input
          type="text"
          className="col-4 text-center"
          value={valor}
          disabled
        />
        <span className="col-4 btn btn-info caja" onClick={sumar}>
          +
        </span>
      </div>
    </>
  );
}

export default App;
