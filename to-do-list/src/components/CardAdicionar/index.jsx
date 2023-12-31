import "./style.css"
import { useState } from "react"

function CardAdicionar(props) {

    const [tarefa, setTarefa] = useState("")

    return (
        <>
            <div className="tarefas">
                <h1 className="fonte-LoL">LISTA DE TAREFAS</h1>
                <form>
                    <input className="tarefa-input" type="text"
                        value={tarefa}
                        placeholder="Adicione aqui sua Tarefa!"
                        onChange={(e) => setTarefa(e.target.value)} />
                    <button className="btn-adicionar btn-LoL" onClick={e => props.adicionarTarefa(e, tarefa, setTarefa)}>Adicionar</button>
                </form>
                {/* <br /><br /><input type="text" placeholder={tarefa} disabled /> */}
            </div>
        </>
    )
}

export default CardAdicionar