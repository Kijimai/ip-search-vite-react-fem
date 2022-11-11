const reducer = (state, action) => {
  switch (action.type) {
    case "TEST":
      console.log("test complete")
      console.log((import.meta.env.VITE_API_KEY))
      return state
  }
}

export default reducer
