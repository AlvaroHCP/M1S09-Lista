import { useState } from "react"

function CardAdicionar(props) {

    const [tarefa, setTarefa] = useState("")

    return (
        <>
            <input type="text"
                value={tarefa}
                placeholder="Adicionar Tarefa"
                onChange={(e) => setTarefa(e.target.value)} />
            <button onClick={() => (props.adicionarTarefa(tarefa))}>Adicionar</button>
            <br /><br /><input type="text" placeholder={tarefa} disabled />
        </>
    )
}

export default CardAdicionar