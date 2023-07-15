import './App.css'
import { useState } from "react"
import CardAdicionar from "./components/CardAdicionar"
import ListItem from "./components/ListItem"

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
        <ListItem key={tarefa.id} id={tarefa.id} textoTarefa={tarefa.textoTarefa} finalizado={tarefa.finalizado} />
      ))}
    </>
  )
}

export default App
