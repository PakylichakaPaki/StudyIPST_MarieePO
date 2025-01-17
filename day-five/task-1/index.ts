function rockPaperScissors(playerChoice: string): { player: string, computer: string, result: string } {
    const options = ["Камень", "Ножницы", "Бумага"];

    if (!options.includes(playerChoice)) {
        throw new Error("Только 'Камень', 'Ножницы' или 'Бумага'!");
    }
    //рандомчик
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    const rules: { [key: string]: string } = {
        Камень: "Ножницы",
        Ножницы: "Бумага",
        Бумага: "Камень",
    };

    let result: string;
    if (playerChoice === computerChoice) {
        result = "Ничья!";
    } else if (rules[playerChoice] === computerChoice) {
        result = "Игрок победил!";
    } else {
        result = "Компьютер победил!";
    }

    return {
        player: playerChoice,
        computer: computerChoice,
        result: result,
    };
}
try {
    const {player, computer, result} = rockPaperScissors("Камень");
    console.log(`Игрок выбрал: ${player}`);
    console.log(`Компьютер выбрал: ${computer}`);
    console.log(`Результат: ${result}`);
} catch (error) {
    console.error(error as Error);
}