import { useState } from "react";
import "../css/testes.css";

export default function SliderNota({ min = 1, max = 6, defaultValue = 3 }) {
  const [valor, setValor] = useState(defaultValue);

  const getBg = (val) => {
    const percent = ((val - min) / (max - min)) * 100;
    return `linear-gradient(to right, #320000 ${percent}%, white ${percent}%)`;
  };

  const handleChange = (e) => setValor(Number(e.target.value));
  const menos = () => valor > min && setValor(valor - 1);
  const mais = () => valor < max && setValor(valor + 1);

  return (
    <div className="ctrl-nota">
      <div className="bt-" onClick={menos}>
        <i className="fa-solid fa-minus"></i>
      </div>
      <input
        className="nota"
        type="range"
        min={min}
        max={max}
        value={valor}
        onChange={handleChange}
        style={{ background: getBg(valor) }}
      />
      <div className="btPlus" onClick={mais}>
        <i className="fa-solid fa-plus"></i>
      </div>
    </div>
  );
}
