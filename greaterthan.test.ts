import greaterThan from "./greaterthan";

it("if x is greater than y, return true", function () {
    expect(greaterThan(6,3)).toBe(true);
})

it("if x is less than y, return false", function () {
    expect(greaterThan(3,6)).toBe(false);
})

it("if x equals y, returns false", function () {
    expect(greaterThan(3,3)).toBe(false);
})