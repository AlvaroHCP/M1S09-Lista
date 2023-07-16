import "./style.css"
import { useState } from "react"

function ListItem(props) {

    const [finalizado, setFinalizado] = useState(props.finalizado)

    let btnText = "Finalizar"

    return (
        <>
            <section className="container">
                <input type="checkbox" checked={finalizado} />
                {/* <h3>{props.id} - {props.textoTarefa} - {finalizado ? "Sim" : "Não"}</h3> */}
                <div className="container lista">
                    <h3 className={finalizado && "tarefaFinalizada"}>{props.textoTarefa}</h3>
                    <div>
                        <button onClick={() => setFinalizado(!finalizado)}>{finalizado ? (btnText = "Reativar") : (btnText = "Finalizar")}</button>
                        <button className="btn-remover" onClick={() => props.removerTarefa(props.id)}>Remover</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ListItem