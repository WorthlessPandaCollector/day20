type Account = {
    favoriteShows: string[];
}

function isFavorite(account: Account, show:string):boolean {
    if(account.favoriteShows.length > 10) throw new Error("fml")
    if(account.favoriteShows.length < 2) throw new Error("what a waste of time")
    return account.favoriteShows.includes(show);
}

export { isFavorite, type Account };