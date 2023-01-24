import { truncateString } from "./truncateString";
import { MAX_STRING_LENGTH } from "./truncateString";

const string1 = "this is longer than 60 characters, one two three four five six seven eight nine ten"
const string2 = "this string is less than 60 characters"
const string3: any = null;
it("if string is less than MAX_STRING_LENGTH, it returns the normal string.", function(){
    expect(truncateString(string2, MAX_STRING_LENGTH)).toBe(string2)

})

it("if the string is more than 60 characters, it shortens the string to only have 60 characters and returns it", function (){
    expect(truncateString(string1, MAX_STRING_LENGTH)).toBe("this is longer than 60 characters, one two three four five s")
})

it("if no string exists, return ", function(){
    expect(truncateString(string3, MAX_STRING_LENGTH)).toBe("");
})