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
