const countFilledValues = (obj: Record<string, unknown>): number => {
    let count = 0;

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (value !== null && value !== undefined && value !== "") {
                count++;
            }
        }
    }

    return count;
};

const data = {
    name: "John",
    age: 30,
    address: "",
    phone: undefined,
    email: "4kX0r@example.com",
    website: null,
};

console.log(countFilledValues(data));