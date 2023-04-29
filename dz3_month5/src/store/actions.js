import {
  DECREASE_COUNT,
  INCREASE_COUNT,
  CHANGE_NAME,
  CHANGE_AGE,
  CHANGE_GENDER,
} from "./types";

export function changeName(payload) {
  return {
    type: CHANGE_NAME,
    payload,
  };
}
export function changeAge(payload) {
  return {
    type: CHANGE_AGE,
    payload,
  };
}
export function changeGender(payload) {
  return {
    type: CHANGE_GENDER,
    payload,
  };
}
export function decreaseCount() {
  return {
    type: DECREASE_COUNT,
  };
}
export function increaseCount() {
  return {
    type: INCREASE_COUNT,
  };
}
