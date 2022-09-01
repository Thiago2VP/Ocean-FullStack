import { useEffect, useState } from "react";
import "./HightScore.css";

function HightScore(props) {

    //take itens for all function
    const [items, setItems] = useState(undefined);

    //Request back end
    //Use fetch, axios or other
    useEffect(function () {
        //Function to Request
        async function loadScores() {
            //Request from scores backend
            const response = await fetch("http://localhost:3333/scores");
            //take the body content in json
            const body = await response.json();
    
            setItems(body);
        }

        //Execute the function
        loadScores();
    }, []);

    const itemsLoading = items === undefined;

    async function savePoints(event) {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;

        console.log(name);

        const response = await fetch("http://localhost:3333/scores", {
            method: "POST",
            body: JSON.stringify({ name: name, points: props.pontos }),
            headers: {
                "Content-type": "application/json"
            }
        });

        const body = await response.json();

        console.log("Pontuacao salva com sucesso:", body);
    }

    return (
        <div className="HightScore">
            <div>
                Voce fez <b>{props.pontos}</b> pontos!
            </div>

            <div>
                <h1>HightScore</h1>

                {itemsLoading ? (
                    <div>Carregando...</div>
                ) : (
                    <div>
                        {items.map((item, index) => (
                            <div key={`score_${index}`}>
                                {item.name} - {item.points}
                            </div>
                        ))}
                    </div>
                )}
            </div>


            <div>
                <h1>Registre sua pontuaçao!</h1>
                <form onSubmit={savePoints}>
                    <input type="text" name="name" placeholder="Digite o seu nome..." />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    );
}

export default HightScore;