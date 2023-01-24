
const string: string ="horseman"
const string2: string = "no horses allowed"

function isHorseman(string: string): boolean {
    if(string !== "horseman") throw new Error("not a horse");
    return true;
}


export { 
    isHorseman,
    string,
    string2
}