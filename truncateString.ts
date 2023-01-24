

const MAX_STRING_LENGTH: number = 60;

function truncateString(string: string, MAX_STRING_LENGTH: number): string {
    if(!string) return "";

    if(string.length > MAX_STRING_LENGTH){
        return string.slice(0, MAX_STRING_LENGTH);
    }
    return string;
}

export {
    truncateString,
    MAX_STRING_LENGTH
}