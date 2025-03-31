function printNumbers(n) {
    let out = "";
    for (let i = 1; i < n; i++) {
        out += i + " ";
    }
    return out + n;
}

export default printNumbers
