const sum = (x, y) => x + y;

// 테스트 description을 잘써주는게 굉장히 중요하다.
test('sum should return 4 when x is 2 and y is 2', () => {
  const result = sum(2, 2);

  expect(result).toBe(4);
});

test('sum should return 6 when x is 3 and y is 3', () => {
  const result = sum(3, 3);

  expect(result).toBe(6);
});
