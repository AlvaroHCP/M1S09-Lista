import { useState } from "react"

function CardAdicionar() {

    const [tarefa, adicionaTarefa] = useState("")

    return (
        <>
            <input type="text"
                value={tarefa}
                placeholder="Adicionar Tarefa"
                onChange={(e) => adicionaTarefa(e.target.value)} />
            <button onClick={(tarefa) => (tarefa)}>Adicionar</button>
        </>
    )
}

export default CardAdicionar