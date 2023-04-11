export const initialState = {
  currentLanguage: "en",
  loadingComplete: false,
};

const AppReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TOGGLE LANGUAGE":
      const toggleLanguage = state.currentLanguage === "es" ? "en" : "es";
      document.documentElement.lang = toggleLanguage;
      return {
        ...state,
        currentLanguage: toggleLanguage,
      };
    case "LOADING":
      const loading = state.loadingComplete === false ? true : false;
      return {
        ...state,
        loadingComplete: loading,
      };
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
};

export default AppReducer;
