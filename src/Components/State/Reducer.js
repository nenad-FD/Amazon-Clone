export const initialState = {
  basket: [],
  user: null
};


export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
    return { ...state, user : action.user};
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket.concat(action.item)] };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: [...state.basket.filter((el) => el.id !== action.id)],
      };
    default:
      return state;
  }
};
