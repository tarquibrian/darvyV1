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

  const updateColor = (colors) => {
    dispatch({
      type: "UPDATE COLOR",
      payload: {
        colors,
      },
    });
  };

  const changeTheme = (theme) => {
    dispatch({
      type: "CHANGE THEME",
      payload: {
        theme,
      },
    });
  };

  return (
    <AppContext.Provider
      value={{ state, toggleLanguage, loadingComplete, updateColor, changeTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
