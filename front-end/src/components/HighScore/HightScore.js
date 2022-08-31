import "./HightScore.css";

function HightScore() {
    return (
        <div className="HightScore">
            <div>
                Voce fez <b>50</b> pontos!
            </div>

            <div>
                <h1>HightScore</h1>

                <div>Paulo - 90 pontos</div>
                <div>Roberto - 50 pontos</div>
                <div>Ana - 32 pontos</div>
            </div>

            <div>
                <h1>Registre sua pontuaçao!</h1>
                <form>
                    <input type="text" placeholder="Digite o seu nome..." />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    );
}

export default HightScore;