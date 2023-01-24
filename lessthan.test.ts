import lessThan from "./lessthan";

it("if x is less than y, return true", function () {
    expect(lessThan(3,6)).toBe(true);
})

it("if x is greater than y, return false", function () {
    expect(lessThan(6,3)).toBe(false);
})

it("if x equals y, returns false", function () {
    expect(lessThan(3,3)).toBe(false)
})