const reducer = (state, action) => {
  switch (action.type) {
    case "TEST":
      console.log("test complete")
      return state
  }
}

export default reducer
