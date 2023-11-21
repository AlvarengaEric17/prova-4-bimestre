import React from "react";
import { useState } from "react";
import '../components/Media.css';


function Media() {

    const [nota1, setNota1] = useState();
    const [nota2, setNota2] = useState();
    const [nota3, setNota3] = useState();


    function calcularMedia() {
        const media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3

        if (media <= 4) {
            alert(`Aluno REPROVADO, sua média foi: ${media}`)

        } else if (media > 4 && media < 6) {
            alert(`Aluno está de RECUPERAÇÃO, sua média foi: ${media}`)

        } else if (media >= 6) {
            alert(`Aluno APROVADO, sua média foi: ${media}`)
        }

    }





    return (

            <div className="main">
               
                <div className="card">

                <h1>Calcular média de notas</h1>
                    <input
                        type="number"
                        value={nota1}
                        onChange={(e) => setNota1(e.target.value)}
                        placeholder="Digite a primeira nota"
                    />
                    <input
                        type="number"
                        value={nota2}
                        onChange={(e) => setNota2(e.target.value)}
                        placeholder="Digite a segunda nota"
                    />
                    <input
                        type="number"
                        value={nota3}
                        onChange={(e) => setNota3(e.target.value)}
                        placeholder="Digite a terceira nota"
                    />

                    <button onClick={calcularMedia}>Calcular</button>
                </div>

            </div>


    )
}


export default Media;