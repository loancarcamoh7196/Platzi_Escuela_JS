//Importar acciones disponibles de la app
import { actions } from '../actions/index';

const reducer = (state, action) => {

  switch (action.type) {
    /**
     * 
     */
    case actions.setFavorite:
      //Opcion sencilla
      // const exist = state.myList.find(item => item.id === action.payload.id)
      // if (exist) return {...state}
      
      return {
        ...state,
      
        myList: [
          state.myList.some(items => items.id ===action.payload.id) ? //Si encuentra coincidencia en mi lista
                        [...state.myList]
                        :
                        [...state.myList, action.payload // Sino encuentra, pegara a la pila el nuevo item
        ]
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