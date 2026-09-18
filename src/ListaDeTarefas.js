import React, { useContext } from "react";
import { TarefasContext } from "./ContextoTarefas";
import Tarefa from "./Tarefa";
import "./ListaDeTarefas.css";

function ListaDeTarefas({ filtro }) {
  const { state } = useContext(TarefasContext);

  let tarefasFiltradas = state.tarefas;

  if (filtro === "concluidas") {
    tarefasFiltradas = state.tarefas.filter(
      (tarefa) => tarefa.concluida
    );
  }

  if (filtro === "pendentes") {
    tarefasFiltradas = state.tarefas.filter(
      (tarefa) => !tarefa.concluida
    );
  }

  return (
    <div className="lista-container">

      <div className="lista-titulo">
        <h2>Lista de Tarefas</h2>
        <span>{tarefasFiltradas.length} tarefas</span>
      </div>

      <div className="lista">
        {tarefasFiltradas.map((tarefa) => (
          <Tarefa key={tarefa.id} tarefa={tarefa} />
        ))}
      </div>

    </div>
  );
}

export default ListaDeTarefas;