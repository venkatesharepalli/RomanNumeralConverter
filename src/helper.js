const mapRomanNumericals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  
   /**
   * convertToRoman - method to convert from number to roman numericals.
   * @param {number} num - input value.
   * @returns {string} - roman numericals
   */
  export const convertToRoman = num => {
    const lookup = mapRomanNumericals;
    let romanized = "";
    const invaild = 'The input must be a Number and in the range of 1 - 4999';

    if (num > 4999 || isNaN(num) || num === 0) {
        return invaild
      } 

    for (let i in lookup) {
        while (num >= lookup[i]) {
            romanized += i;
            num -= lookup[i];
        }
    }    
  
    return romanized || "invalid Input";
  };

  