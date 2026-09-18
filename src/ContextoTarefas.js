import React, { createContext, useReducer } from "react";

export const TarefasContext = createContext();

const estadoInicial = {
  tarefas: []
};

function reducer(state, action) {
  switch (action.type) {
    case "ADICIONAR":
      return {
        ...state,
        tarefas: [
          ...state.tarefas,
          {
            id: Date.now(),
            nome: action.nome,
            concluida: false
          }
        ]
      };

    case "CONCLUIR":
      return {
        ...state,
        tarefas: state.tarefas.map((tarefa) =>
          tarefa.id === action.id
            ? {
                ...tarefa,
                concluida: !tarefa.concluida
              }
            : tarefa
        )
      };

    default:
      return state;
  }
}

export function TarefasProvider({ children }) {
  const [state, dispatch] = useReducer(
    reducer,
    estadoInicial
  );

  return (
    <TarefasContext.Provider value={{ state, dispatch }}>
      {children}
    </TarefasContext.Provider>
  );
}