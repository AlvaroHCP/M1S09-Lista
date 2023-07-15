import "./style.css"
import { useState } from "react"

function ListItem(props) {

    const [finalizado, setFinalizado] = useState(props.finalizado)

    return (
        <>
            <div className="container">
                <input type="checkbox" checked={finalizado} />
                {/* <h3>{props.id} - {props.textoTarefa} - {finalizado ? "Sim" : "Não"}</h3> */}
                <div className="container lista">
                    <h3 className={finalizado && "tarefaFinalizada"}>{props.textoTarefa}</h3>
                    <button onClick={() => setFinalizado(!finalizado)}>Finalizar</button>
                </div>
            </div>
        </>
    )
}

export default ListItem