function longestWord(str: string): string {
    let maxLength = 0;
    let longestWord = '';
    
    const words = str.split(' ');
    
    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
            longestWord = word;
        }
    }
    
    return longestWord;
}

// Тесты
console.log(longestWord("I am a Marie")); 
console.log(longestWord("i am very hard programmer"));
console.log(longestWord("Hello world"));