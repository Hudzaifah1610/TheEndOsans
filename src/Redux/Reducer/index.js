import ActionType from "../Action/ActionType";

const globalState = {
  dataUser: [],
  kontakUser : [],
  deletePesan: []
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
        case ActionType.DELETE_PESAN: 
        return {
          ...state,
          deletePesan: action.value
        }
      default : 
        return state
  }
};
