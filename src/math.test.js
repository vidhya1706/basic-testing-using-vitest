// math.test.js or math.spec.js
import { it, expect } from "vitest";

import { add } from "./math";

it("should sum all the numbers in an array", () => {
  // Arrange
  const input = [1, 2, 3];
  const expectedResult = input.reduce((prevValue, curValue) => {
    return prevValue + curValue;
  });

  // Act
  const result = add(input);

  // Assert
  expect(result).toBe(expectedResult);
});
