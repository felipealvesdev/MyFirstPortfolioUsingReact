import React, { createContext, useState } from 'react';

// Cria o contexto
export const GlobalStateContext = createContext();

// Provedor do estado global
export function GlobalStateProvider({ children }) {
  const [globalState, setGlobalState] = useState("Portugues");

  const handleChangeGlobalState = () => {
    setGlobalState(globalState === "Portugues" ? "English" : "Portugues");
  };

  return (
    <GlobalStateContext.Provider value={{ globalState, handleChangeGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

// Hook para acessar o estado global
/*export function useGlobalState() {
  return useContext(GlobalStateContext);
}*/