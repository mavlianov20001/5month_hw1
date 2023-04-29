const initialState = {
  count: 0,
};

import { INCREASE_COUNT, DECREASE_COUNT } from "./types";

export const counterReducer = (state = initialState, action) => {
  if (action.type === INCREASE_COUNT) {
    return { ...state, count: state.count + 1 };
  } else if (action.type === DECREASE_COUNT) {
    return { ...state, count: state.count - 1 };
  } else {
    return state;
  }
};
