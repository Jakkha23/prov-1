
function isSameUser(a, b) {
    if (a === b) {
        return true
    }
    else {
        return false
    }
}

console.log(isSameUser("jakkha19@gmail.com", "jakkha19@gmail.com")) //returnerar true
console.log(isSameUser("jakkha19@gmail.com", "jakob.khaytan@skola.botkyrka.se")) //returnerar false
