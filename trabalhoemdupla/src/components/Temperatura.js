import React from "react";
import { useState } from "react";
import '../components/Temperatura.css';


function Temperatura() {

    const [graus, setGraus] = useState();
    const [fahrenheit, setFahrenheit] = useState();



    function calcularaGraus() {
        const TemperaturaGraus = graus * 1.8 + 32

        alert(`A conversão de Graus para Fahrenheit é: ${TemperaturaGraus}`)
    }

    function calcularFahrenheit() {
        const TemperaturaFahrenheit = (fahrenheit - 32) / 1.8
        alert(`A conversão de Fahrenheit para Graus é: ${TemperaturaFahrenheit}`)
    }

    return (

        <div className="main">

            <div className="card">

                <h1>Conversor de Temperatura</h1>
                <input
                    type="number"
                    value={graus}
                    onChange={(e) => setGraus(e.target.value)}
                    placeholder="Digite a temperatura em Graus aqui"
                />
                <input
                    type="number"
                    value={fahrenheit}
                    onChange={(e) => setFahrenheit(e.target.value)}
                    placeholder="Digite a temperatura em Fahrenheit aqui"
                />


                <button onClick={calcularFahrenheit}>Calcular Fahrenheit</button>
                <button onClick={calcularaGraus}>Calcular Graus</button>
            </div>

        </div>


    )
}


export default Temperatura;