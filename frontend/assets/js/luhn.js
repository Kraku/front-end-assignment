/**
 * Luhn algorithm in JavaScript: validate credit card number supplied as string of numbers
 * @author ShirtlessKirk. Copyright (c) 2012.
 * @license WTFPL (http://www.wtfpl.net/txt/copying)
 */
export default ((arr) => (ccNum) => {
  let len = ccNum.length,
    bit = 1,
    sum = 0,
    val;

  while (len) {
    val = parseInt(ccNum.charAt(--len), 10);
    sum += (bit ^= 1) ? arr[val] : val;
  }

  return sum && sum % 10 === 0;
})([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]); // lookup table. Basically, instead of calculating the summed result of the numbers that are doubled (every second digit from right) each time, the code uses the precalculated value stored in the array at the index of the digit in question.
