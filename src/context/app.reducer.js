export const initialState = {
  currentLanguage: "en",
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
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
};

export default AppReducer;
