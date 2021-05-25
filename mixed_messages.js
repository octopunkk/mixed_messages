//Today, you will [action] with [character] in [place].
var fs = require("fs");

let randomAction = () => {
    var text = fs.readFileSync("./actions.txt").toString('utf-8');
    var textByLine = text.split(";");
    let num = textByLine.length;
    let randNum = Math.floor(Math.random()*num);
    return textByLine[randNum];
};
let randomCharacter = () => {
    var text = fs.readFileSync("./characters.txt").toString('utf-8');
    var textByLine = text.split(";");
    let num = textByLine.length;
    let randNum = Math.floor(Math.random()*num);
    return textByLine[randNum];
};
let randomPlace = () => {
    var text = fs.readFileSync("./places.txt").toString('utf-8');
    var textByLine = text.split(";");
    let num = textByLine.length;
    let randNum = Math.floor(Math.random()*num);
    return textByLine[randNum];
};
console.log(`Today, you will ${randomAction()} with ${randomCharacter()} in ${randomPlace()}.`)