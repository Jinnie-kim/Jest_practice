// Action Type
export const INCREASE = 'counter/increase';
//
// Action
//
// Action Creator
const increaseCounter = () => {
  return {
    type: INCREASE,
  };
};
//
// reducer
const INITIAL_STATE = 0;

const counterReducer = (prevState = INITIAL_STATE, action) => {
  if (action.type === INCREASE) {
    return prevState + 1;
  }

  return prevState;
};

export { increaseCounter };
export default counterReducer;

// redux는 pure function, side effect X
// input과 output이 어떤 경우에도 같다. -> test 용이
