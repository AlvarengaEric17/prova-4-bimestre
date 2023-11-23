import React from "react";
import { useState } from "react";
import '../components/SimpleCounter.css';

function SimpleCounter() {

    const [numero, setNumero] = useState(0);
    const adicionarNumero = () => {
        setNumero(numero + 1);
    };

    const subtrairNumero = () => {
        setNumero(numero - 1);
    }

    return (

        <div className="main">

            <div className="card">

                <h1>Contador</h1>

                <h2>{numero}</h2>


                <button onClick={adicionarNumero}>Adicionar</button>
                <button onClick={subtrairNumero}>Retirar</button>
            </div>

        </div>


    )
}
export default SimpleCounter;