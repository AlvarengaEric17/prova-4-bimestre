import React from "react";
import { useState } from "react";
import '../components/Conversor.css';


function Conversor() {

    const [real, setReal] = useState();
    


    function calcularDolar() {
        const valor = (Number(real) * 4.90)

       alert(`${real} convertido em Dolares é ${valor}`)

    }





    return (

            <div className="main">
               
                <div className="card">

                <h1>Calcular conversão do DOLAR para REAL</h1>
                    <input
                        type="number"
                        value={real}
                        onChange={(e) => setReal(e.target.value)}
                        placeholder="Digite o valor do dolar aqui"
                    />
                

                    <button onClick={calcularDolar}>Calcular</button>
                </div>

            </div>


    )
}


export default Conversor;