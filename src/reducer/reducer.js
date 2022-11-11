const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_IP":
      console.log("test complete")
      console.log((import.meta.env.VITE_IP_GEO_API_KEY))
      return state
  }
}

export default reducer
