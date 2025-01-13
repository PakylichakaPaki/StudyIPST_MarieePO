function indexOf(str: string, substr: string): number {
    if (substr === '') return 0;

    if (substr.length > str.length) return -1;

    for (let i = 0; i <= str.length - substr.length; i++) {
        let j = 0;
        while (j < substr.length && str[i + j] === substr[j]) {
            j++;
        }
        if (j === substr.length) return i;
    }

    return -1;
}

// Тесты
console.log(indexOf("hello world", "hello"));
console.log(indexOf("hello world", "o w"));
console.log(indexOf("hello world", "d"));
console.log(indexOf("hello world", "hello world"));
console.log(indexOf("hello world", "hello world!"));
console.log(indexOf("hello world", "world!"));
console.log(indexOf("", ""));
