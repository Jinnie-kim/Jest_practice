import { thunk } from './thunk';

test('thunk middleware should call action with dispatch and getState when action is function', () => {
  // mocking
  const store = {
    dispatch() {},
    getState() {},
  };

  const next = () => {};
  // jest.fn(): mock function
  const action = jest.fn(); // action이 호출됐는지 검사할 수 있다.

  const thunkMiddleware = thunk(store)(next);
  thunkMiddleware(action);

  // action이 function인 경우 action을 호출해야한다.
  expect(action).toHaveBeenCalled();
  // dispatch, getState를 인자로 넣으면서
  expect(action).toHaveBeenCalledWith(store.dispatch, store.getState);
});

// action이 function이 아닐 경우 action인자와 함께 next를 호출해야한다.
test('thunkMiddleware should called next with action when action is not a function', () => {
  // mocking
  const store = {
    dispatch() {},
    getState() {},
  };

  // jest.fn(): mock function
  const next = jest.fn();
  const action = {};

  const thunkMiddleware = thunk(store)(next);

  thunkMiddleware(action);

  expect(next).toHaveBeenCalledWith(action);
});
