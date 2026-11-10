import {
  createContext,
  useReducer,
  useContext,
} from "react";

const CitiesContext = createContext();

const initialStates = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return { ...state, cities: action.payload, isLoading: false };
    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };
    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };
    case "rejected":
      return { ...state, error: action.payload };
    default:
      throw new Error("Unkown action");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialStates,
  );

  function getCity(id) {
    const city = cities.find((city) => city.id === Number(id));
    if (city) dispatch({ type: "city/loaded", payload: city });
  }

  function createCity(newCity) {
    const city = { ...newCity, id: Date.now() };
    dispatch({ type: "city/created", payload: city });
  }

  function deleteCity(id) {
    dispatch({ type: "city/deleted", payload: id });
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("useCities was used outside the CitiesContext.Provider");
  return context;
}

export { CitiesProvider, useCities };
