import { INCREASE, increaseCounter } from '.';

test('increaseCounter should return INCREASE action', () => {
  const result = increaseCounter();

  expect(result).toEqual({
    type: INCREASE,
  });
});
