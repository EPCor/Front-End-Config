import { SOME_ACTION } from './action';

export function data(state = 1, action) {
  console.log(action);
  switch (action.type) {
    case SOME_ACTION:
      return action.data;
    default:
      return state;
  }
}
