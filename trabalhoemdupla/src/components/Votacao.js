import React, { useState } from 'react';
import '../components/Votacao.css';
function Formulario() {
    const [opcao, setOpcao] = useState('');

    const handleVote = (event) => {
        event.preventDefault();
        alert(`O sabor escolhido foi: ${opcao}`)
    };

    return (

        <div className="main">

            <div className="card">

                <form onSubmit={handleVote}>
                    <label>
                        Chocolate
                        <input
                            type="radio"
                            value="chocolate"
                            checked={opcao === "chocolate"}
                            onChange={(e) => setOpcao(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Morango
                        <input
                            type="radio"
                            value="morango"
                            checked={opcao === "morango"}
                            onChange={(e) => setOpcao(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Napolitano
                        <input
                            type="radio"
                            value="napolitano"
                            checked={opcao === "napolitano"}
                            onChange={(e) => setOpcao(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="submit">Votar</button>
                </form>
            </div>
        </div>

    );
}

export default Formulario;