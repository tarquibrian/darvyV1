export const initialState = {
  currentLanguage: "es",
};

const AppReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TOGGLE LANGUAGE":
      const toggleLanguage = state.currentLanguage === "es" ? "en" : "es";
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
