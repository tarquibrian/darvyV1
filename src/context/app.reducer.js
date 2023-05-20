export const initialState = {
  currentLanguage: "en",
  loadingComplete: false,
  color: 0.8,
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
    case "UPDATE COLOR":
      return {
        ...state,
        color: payload.color,
      };
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
};

export default AppReducer;
