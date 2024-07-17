export const capitalised = function(string) {
    let sol = "";
    let prev = ' ';
    for(let itr = 0; itr < string.length; itr++) {
        if(prev == ' '){
            sol += string[itr].toUpperCase();
        } else {
            sol += string[itr];
        }
        prev = string[itr];
    }
    return sol;
}

console.log(capitalised("hitesh choudhary"));