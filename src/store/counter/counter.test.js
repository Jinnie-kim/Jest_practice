import counterReducer, { INCREASE, increaseCounter } from '.';

test('increaseCounter should return INCREASE action', () => {
  const result = increaseCounter();

  expect(result).toEqual({
    type: INCREASE,
  });
});

// counterReducer 함수 테스트

describe('counterReducer', () => {
  // 1. prevState, increase action -> prevState + 1을 리턴하는지 확인
  it('should return 3 when prevState is 2 and action is increase', () => {
    // counterReducer에 대한 유닛 테스트
    // const result = counterReducer(2, {
    //   type: INCREASE,
    // });

    // test과정에서 increaseCounter라는 또 다른 함수 사용
    // increaseCounter와 countReducer의 통합테스트라고 볼 수 있다.
    const result = counterReducer(2, increaseCounter());

    expect(result).toBe(3);
  });
  // 2. prevState 만 받았을 경우 -> prevState를 리턴하는지 확인
  it('should return prevState when prevState is provided and action is not provided', () => {
    const result = counterReducer(0);

    expect(result).toBe(0);
  });

  // 3. prevState가 주어지지 않을 때, initalState가 0인지 확인
  it('should return INITIAL_STATE(0) when prevState is not provided', () => {
    const result = counterReducer();

    const INITIAL_STATE = 0;

    expect(result).toBe(INITIAL_STATE);
  });
});
