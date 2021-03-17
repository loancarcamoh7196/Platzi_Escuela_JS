//Impotar acciones diponibles de la app
import { actions } from '../actions/index';

const reducer = (state, action) => {

  switch (action.type) {
    case actions.setFavorite:
      return {
        ...state,
        //state.myList.indexOf(action.payload) >= 0 && action.payload 
        myList: [...state.myList, ( action.payload)]
      };
    case actions.deleteFavorite:
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;