import exp from "constants";
import { isFavorite, type Account } from "./favoriteShows";

const tim: Account = {favoriteShows: ["south park", "reno 911", "seinfeld"]}
const horsey: Account = {favoriteShows:["pedo-files"]};
const moreThanTen: Account = {favoriteShows: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]}



it("run the function, passing in a user and a show, if the user has less than 2 shows, throw an error", () => {
    expect(() => isFavorite(horsey, "pedo-files")).toThrow("what a waste");
})

it("run the function, passing in user and show, if the user has more than 10 shows, throw an error", () => {
    expect(() => isFavorite(moreThanTen,"10")).toThrow("fml")
})

it("run the function, passing in user and show, if the user has > 2 and < 10 and show is from the users favorites, return true", () => {
    expect(isFavorite(tim, "south park")).toBe(true);
})

it("run the function, passing in user and show, if the user has a fav list of > 2 and < 10 and show passed is not on fav list, return false", () => {
    expect(isFavorite(tim, "pedo-files")).toBe(false);
})