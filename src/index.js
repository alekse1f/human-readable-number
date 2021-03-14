module.exports = function toReadable (n) {
    const numbers = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "ninety",
    ];
    const numbersH = [
        "",
        "one hundred ",
        "two hundred ",
        "three hundred ",
        "four hundred ",
        "five hundred ",
        "six hundred ",
        "seven hundred ",
        "eight hundred ",
        "nine hundred ",
    ];
    const numbersT = [
        "",
        "",
        "twenty ",
        "thirty ",
        "forty ",
        "fifty ",
        "sixty ",
        "seventy ",
        "eighty ",
        "ninety ",
    ];
    const f = n % 100;
    let result = numbersH[Math.trunc(n / 100)];
    if (f < 20) {
        result += numbers[f];
    } else {
        result += numbersT[Math.trunc(f / 10)] + numbers[f % 10];
    }
    return result[result.length - 1] == " " ? result.slice(0, -1) : result;
}
