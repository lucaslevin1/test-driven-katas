function wrap(string, num) {
    let words = string.split(' ');
    let newStr = '';
    let count = 1;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (newStr.length + word.length + 1 <= num * count) {
            newStr += word + ' ';
        } else if (i === words.length - 1) {
            newStr += word;
        } else {
            newStr = newStr.slice(0, -1) + '\n' + word + ' ';
            count++
        }
    }
    if (newStr[newStr.length - 1] === ' ') {
        return newStr.slice(0, -1)
    }
    return newStr;
}


module.exports = wrap;
