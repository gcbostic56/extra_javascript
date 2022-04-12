function reverseNumber(x)
{
    let y = x.toString()
	return y.split("").reverse().join("");
}
console.log(Number(reverseNumber(32243)));

function alphabetic (x) {
    return x.split("").sort().join("")
}

console.log(alphabetic("Patrick"))

function upperCaseEachFirstLetterWord (x) {
   let array = x.split(" ");
   let array2 = [];

   for(var i = 0; i < array.length; i++){
    array2.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
}
    return array2.join(' ');
}

console.log(upperCaseEachFirstLetterWord("patrick is chilling"))

function primeNumber (x) {
    if (x <= 1) {
        return false;
    }
    else if (x === 2) {
        return true;
    }
    else { 
        for (let y = 2; y < x; y++)
            if (x % y === 0) {
                return false;
            }
        } return true
}       

console.log(primeNumber(0))

function getThatUniqueCharacter (word) {
    let newArray = [];

    for (i = 0; i < word.length; i++) {
        if(newArray.includes(word[i]) === false) {
            newArray += word[i]
        }
    }
    return newArray
}

console.log(getThatUniqueCharacter("thequickbrownfoxjumpsoverthelazydog"))