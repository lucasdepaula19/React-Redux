import { CLICK_UPDATE_VALUE } from '../actions/actionsTypes';

const initialState = {
    newValue: 'Atualizado via Redux'
  };

  export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
      case CLICK_UPDATE_VALUE:
        return {
          ...state,
          newValue: action.newValue
        };
      default:
        return state;
    }
  };


  //https://medium.com/reactbrasil/iniciando-com-redux-c14ca7b7dcf