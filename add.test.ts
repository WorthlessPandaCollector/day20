import add from "./add";

it("adds to variables together", function () {
    const x: number = 6;
    const y: number= 9;
    const expected: number = 15;
    expect(add(x,y)).toBe(expected);
})