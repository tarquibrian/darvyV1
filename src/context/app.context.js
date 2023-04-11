import { createContext, useContext, useReducer } from "react";
import AppReducer, { initialState } from "./app.reducer";

const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const toggleLanguage = (currentLanguage) => {
    dispatch({
      type: "TOGGLE LANGUAGE",
      payload: {
        currentLanguage,
      },
    });
  };

  const loadingComplete = (loading) => {
    dispatch({
      type: "LOADING",
      payload: {
        loading,
      },
    });
  };

  return (
    <AppContext.Provider value={{ state, toggleLanguage, loadingComplete }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
