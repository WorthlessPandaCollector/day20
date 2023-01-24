// problem number 8, using interface and implementing User as a UserClass
interface User {
    favoriteShows: string[];
    isFavorite(show: string): boolean;
}

class UserClass implements User {
    favoriteShows: string[];
    // constructor for the UserClass is optional
    constructor(favoriteShows: string[]) {
        this.favoriteShows = favoriteShows;
    }


    isFavorite(show: string): boolean {
        if (this.favoriteShows.length > 10) throw new Error("fml");
        if (this.favoriteShows.length < 2) throw new Error("not worth my time");
        return this.favoriteShows.includes(show);
    }
}



export { type User, UserClass }