
import { useState } from "react";
import { FaCarRear } from "react-icons/fa6";
import './index.css'


export default function CalculadoraCombustivel() {

  const [alcool, setAlcool] = useState<string>("");
  const [gasolina, setGasolina] = useState<string>("");

  function CalculaValores() {
    const a = parseFloat(alcool);
    const g = parseFloat(gasolina);

    if (isNaN(a) || isNaN(g) || g === 0) {
      alert("Preencha valores válidos!");
      return;
    }

    const valorConta = a / g;

    if (valorConta < 0.7) {
      alert("É mais em conta abastecer com Álcool!");
    } else {
      alert("É mais em conta abastecer com Gasolina!");
    }
  }

  return (
    <div className="main_block">
      <div className="elements">
        <FaCarRear size={"100px"}/>
        <h1>Qual a melhor opção para abastecer?</h1>
        <div className="input_block">
          <p>Álcool (Litro)</p>
          <input type="number" step="0.01" value={alcool} onChange={(e) => setAlcool(Number(e.target.value))} placeholder="Valor por Litro"/>
        </div>
        <div className="input_block">
          <p>Gasolina (Litro)</p>
          <input type="number" step="0.01" value={gasolina} onChange={(e) => setGasolina(Number(e.target.value))} placeholder="Valor por Litro" />
        </div>
        <button onClick={CalculaValores}>Calcular</button>
      </div>
    </div>
  );
}
