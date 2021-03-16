const reducer = (state, action) => {
  // return state;

  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload]
      }
    default:
      return state;
  }
};

export default reducer;