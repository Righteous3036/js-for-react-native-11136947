function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            // Square the even numbers
            return num * num;
        } else {
            // Triple the odd numbers
            return num * 3;
        }
    });
}

function formatArrayStrings(stringArr, numberArr) {
    if (stringArr.length !== numberArr.length) {
        throw new Error("Both arrays must have the same length");
    }

    return stringArr.map((str, index) => {
        const num = numberArr[index];
        if (num % 2 === 0) {
            // Capitalize the entire string if the number is even
            return str.toUpperCase();
        } else {
            // Convert the string to lowercase if the number is odd
            return str.toLowerCase();
        }
    });
}
