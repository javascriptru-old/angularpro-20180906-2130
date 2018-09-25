export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

const initialState = 0;
export function counterReducer(state: number = initialState, action) {
  switch(action) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;

    default:
      return state;
  }

}