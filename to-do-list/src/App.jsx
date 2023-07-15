import './App.css'
import { useState } from "react"
import CardAdicionar from "./components/CardAdicionar"

function App() {

  const [listaTarefas, setListaTarefas] = useState([])

  const adicionarTarefa = (texto) => {
    if (texto == "") {
      alert("É necessário escrever uma tarefa")
      return
    }

    const novaTarefa = { id: listaTarefas.length + 1, textoTarefa: texto, finalizado: false }

    setListaTarefas([...listaTarefas, novaTarefa])
  }

  return (
    <>
      {console.log(listaTarefas)}
      <CardAdicionar adicionarTarefa={adicionarTarefa} />
      {listaTarefas.map((tarefa) => (
        <h2>
          {tarefa.textoTarefa}
        </h2>
      )
      )}
    </>
  )
}

export default App
