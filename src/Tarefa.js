import React, { useContext } from "react";
import { TarefasContext } from "./ContextoTarefas";
import "./Tarefa.css";

function Tarefa({ tarefa }) {
  const { dispatch } = useContext(TarefasContext);

  function concluirTarefa() {
    dispatch({
      type: "CONCLUIR",
      id: tarefa.id
    });
  }

  return (
    <div
      className={`tarefa ${
        tarefa.concluida ? "concluida" : ""
      }`}
    >
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={concluirTarefa}
        />

        <span className="checkmark"></span>
      </label>

      <span className="nome-tarefa">
        {tarefa.nome}
      </span>

      {tarefa.concluida && (
        <span className="status">
          Concluída
        </span>
      )}
    </div>
  );
}

export default Tarefa;