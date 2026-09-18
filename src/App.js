import React, { useContext, useState } from "react";
import { TarefasContext, TarefasProvider } from "./ContextoTarefas";
import ListaDeTarefas from "./ListaDeTarefas";
import "./App.css";

function Conteudo() {
  const { state, dispatch } = useContext(TarefasContext);
  const [nomeTarefa, setNomeTarefa] = useState("");
  const [filtro, setFiltro] = useState("todas");

  function adicionarTarefa() {
    if (nomeTarefa.trim() === "") return;

    dispatch({
      type: "ADICIONAR",
      nome: nomeTarefa
    });

    setNomeTarefa("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      adicionarTarefa();
    }
  }

  const total = state.tarefas.length;
  const concluidas = state.tarefas.filter(
    (tarefa) => tarefa.concluida
  ).length;
  const pendentes = total - concluidas;

  return (
    <div className="app">
      <div className="container">

        <header className="header">
          <div className="logo">✓</div>

          <div>
            <p className="label">MINHAS TAREFAS</p>
            <h1>Gerenciador de Tarefas</h1>
            <p className="subtitle">
              Organize suas atividades e acompanhe seu progresso.
            </p>
          </div>
        </header>

        <div className="stats">

          <div className="card">
            <span>Total</span>
            <strong>{total}</strong>
          </div>

          <div className="card">
            <span>Pendentes</span>
            <strong>{pendentes}</strong>
          </div>

          <div className="card">
            <span>Concluídas</span>
            <strong>{concluidas}</strong>
          </div>

        </div>

        <div className="add">

          <input
            type="text"
            placeholder="Digite uma nova tarefa..."
            value={nomeTarefa}
            onChange={(event) =>
              setNomeTarefa(event.target.value)
            }
            onKeyDown={handleKeyDown}
          />

          <button onClick={adicionarTarefa}>
            Adicionar
          </button>

        </div>

        <div className="tasks-box">

          <div className="tasks-top">

            <h2>Tarefas</h2>

            <div className="filters">

              <button
                className={filtro === "todas" ? "selected" : ""}
                onClick={() => setFiltro("todas")}
              >
                Todas
              </button>

              <button
                className={
                  filtro === "pendentes" ? "selected" : ""
                }
                onClick={() => setFiltro("pendentes")}
              >
                Pendentes
              </button>

              <button
                className={
                  filtro === "concluidas" ? "selected" : ""
                }
                onClick={() => setFiltro("concluidas")}
              >
                Concluídas
              </button>

            </div>

          </div>

          <ListaDeTarefas filtro={filtro} />

        </div>

        <footer>
          Gerenciador de Tarefas • React
        </footer>

      </div>
    </div>
  );
}

function App() {
  return (
    <TarefasProvider>
      <Conteudo />
    </TarefasProvider>
  );
}

export default App;