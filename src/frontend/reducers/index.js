//Importar acciones disponibles de la app
import { actions } from '../actions/index';

const reducer = (state, action) => {

  switch (action.type) {
    /**
     * Agrega a mi lista un nuevo item
     * Si la encuentra coincidencia solo devolvera el mismo array
     * Sino pega nuevo item a la pila
     * @param {array} state lista con info
     * @return {array} state lista modifica con nuevo item
     */
    case actions.setFavorite:
      //Opcion sencilla
      // const exist = state.myList.find(item => item.id === action.payload.id)
      // if (exist) return {...state}

      return {
        ...state,
        myList:
          state.myList.find((item) => item.id === action.payload.id) ? [...state.myList] : [...state.myList, action.payload],
      };
    case actions.deleteFavorite:
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };
    case actions.loginRequest:

      return {
        ...state,
        user: action.payload,
      };
    case actions.registerRequest:
      return {
        ...state,
        user: action.payload,
      };
    case actions.getVideoSource:
      return {
        ...state,
        playing: (
          state.witcher.find((item) => item.id === String(action.payload)) ||
          state.papel.find((item) => item.id === String(action.payload)) ||
          state.trends.find((item) => item.id === String(action.payload)) ||
          state.originals.find((item) => item.id === String(action.payload)) ||
          []
        ),
      };
    case actions.getVideoSearch:
      return {
        ...state,
        searchResult: (
          state.witcher.find((item) => item.title === String(action.payload)) ||
          state.papel.find((item) => item.title === String(action.payload)) ||
          state.trends.find((item) => item.title === String(action.payload)) ||
          state.originals.find((item) => item.title === String(action.payload)) ||
          []
        ),
      };
    default:
      return state;
  }
};

export default reducer;
