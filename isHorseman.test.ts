import { isHorseman, string, string2 } from "./isHorseman";


it("if the string is 'horseman' return true", function () {
    expect(isHorseman(string)).toBe(true);
})

it("if the string is not 'horseman' throw an error", () => {
    expect(() => isHorseman("lame")).toThrow("not a horse")
})