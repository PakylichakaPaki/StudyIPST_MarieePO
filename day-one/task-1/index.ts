function identicalLettersTS(str1: string, str2: string): string {
    const set1 = new Set(str1.toLowerCase());
    const set2 = new Set(str2.toLowerCase());
    
    const commonChars: string[] = [];
    
    for (const char of set2) {
        if (set1.has(char)) {
            commonChars.push(char);
        }
    }
    
    return commonChars.join('');
}

// Тесты
console.log(identicalLettersTS("herllo", "world")); // "rl"
console.log(identicalLettersTS("abc", "def")); // ""
console.log(identicalLettersTS("abc", "abc")); // "abc"
