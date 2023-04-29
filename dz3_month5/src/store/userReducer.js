import { CHANGE_NAME, CHANGE_AGE, CHANGE_GENDER } from "./types";
const initialState = {
  user: {
    name: "",
    age: 0,
    gender: "",
  },
};

export const userReducer = (state = initialState, action) => {
  if (action.type === CHANGE_NAME) {
    return { ...state, name: action.payload };
  } else if (action.type === CHANGE_AGE) {
    return { ...state, age: action.payload };
  } else if (action.type === CHANGE_GENDER) {
    return { ...state, gender: action.payload };
  }
  return state;
};
