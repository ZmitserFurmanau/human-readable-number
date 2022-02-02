module.exports = function toReadable (num) {
    
    const arr = [
        {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'},
        {10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'},
        {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'}
    ];

    const hnd = 'hundred';
    
    num = num.toString();

    if (num < 10)
        return `${arr[0][num]}`;
    if (num < 20)
        return `${arr[1][num]}`;
    if (num < 100 && num % 10 === 0)
        return `${arr[2][num[0]]}`;
    if (num < 100)
        return `${arr[2][num[0]]} ${arr[0][num[1]]}`;
    if (num % 100 === 0)
        return `${arr[0][num[0]]} ${hnd}`;
    if (num % 100 > 0 && num % 100 < 10)
        return `${arr[0][num[0]]} ${hnd} ${arr[0][num % 100]}`;
    if (num % 100 > 0 && num % 100 < 20)
        return `${arr[0][num[0]]} ${hnd} ${arr[1][num % 100]}`;
    if (num % 10 === 0)
        return `${arr[0][num[0]]} ${hnd} ${arr[2][num[1]]}`;
    if (num < 1000)
        return `${arr[0][num[0]]} ${hnd} ${arr[2][num[1]]} ${arr[0][num[2]]}`;
}
