import { useContext, createContext, useReducer, useEffect } from "react"
import reducer from "../reducer/reducer"
import { defaultState } from "../reducer/defaultState"

const AppContext = createContext(null)

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const test = () => {
    dispatch({ type: "TEST" })
  }

  return (
    <AppContext.Provider value={{ state, test }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
