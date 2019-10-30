import ActionType from "../Action/ActionType";

const globalState = {
  dataUser: [],
  kontakUser : []
};

export const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case ActionType.DATA_USER:
      return {
        ...state,
        dataUser: action.value
      };
      case ActionType.KONTAK_USER: 
        return {
          ...state,
          kontakUser : action.value
        }
      default : 
        return state
  }
};
