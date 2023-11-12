import { solution } from "./최빈값 구하기.js";

describe("array with mode", () => {
  // Not an array
  test("Not an array", () => {
    expect(() => {
      solution("a");
    }).toThrow("Error: Not an Array");
  });

  // example1
  test("Array [1, 2, 3, 3, 3, 4]", () => {
    const arr = [1, 2, 3, 3, 3, 4];

    expect(solution(arr)).toBe(3);
  });

  // example2 - fail
  test("Array [1, 1, 2, 2]", () => {
    const arr = [1, 1, 2, 2];

    expect(solution(arr)).toBe(-1);
  });

  // min
  test("Array [1]", () => {
    const arr = [1];

    expect(solution(arr)).toBe(1);
  });

  // max length - fail
  test("Array Length with 99 & no mode", () => {
    const arr = [];

    for (let a = 1; a < 100; a++) arr.push(a);

    expect(solution(arr)).toBe(-1);
  });
});
