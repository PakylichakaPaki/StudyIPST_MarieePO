function runLengthEncoding(str: string): string {
    if (!str) return '';
    let result = '';
    let count = 1;
    let currentChar = str[0];

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === currentChar) {
            count++;
        } else {
            result += currentChar + count;
            currentChar = str[i];
            count = 1;
        }
    }

    return result;
}
function runLengthDecoding(str: string): string {
    let result = '';

    for (let i = 0; i < str.length; i += 2) {
        const char = str[i];
        const count = Number(str[i + 1]);
        result += char.repeat(count);
    }

    return result;
}

// Тесты
console.log(runLengthEncoding("AABBBCCCC"));
console.log(runLengthEncoding(""));
console.log(runLengthEncoding("XYZ"));
console.log(runLengthEncoding("AAAAAA"));
console.log(runLengthDecoding("A2B3C4"));
console.log(runLengthDecoding("X1Y1Z1"));
console.log(runLengthDecoding("A6"));