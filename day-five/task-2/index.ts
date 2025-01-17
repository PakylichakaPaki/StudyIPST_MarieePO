function breakIntoBills(amount: number): { [key: number]: number } {
    const denominations = [100, 50, 10, 5, 2, 1];

    return denominations.reduce((result, bill) => {
        const count = Math.floor(amount / bill);
        if (count > 0) {
            result[bill] = count;
            amount -= count * bill;
        }
        return result;
    }, {} as { [key: number]: number });
}

const bills = breakIntoBills(1298);
console.log(bills);