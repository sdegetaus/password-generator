/**
 * Get a random string according to provided length and what set of characters to include
 * (symbols, numbers, lowercase, uppercase, etc).
 * @param {number} length desired length
 * @param {object} include boolean key/value pairs
 * @returns {string} a random string
 */
export function randomPassword(
  length: number,
  include: {
    symbols: boolean;
    numbers: boolean;
    lowercase: boolean;
    uppercase: boolean;
  }
): string {
  // char sets
  const symbols = "_-=?*!&";
  const digits = "0123456789";
  const alphabet = "abdcefghijklmnopqrstuvwxyz";

  // sum of all the "true" values from the include param
  const boolSum = [
    include.symbols,
    include.numbers,
    include.lowercase,
    include.uppercase,
  ].reduce((p, c) => (c === true ? p + 1 : p), 0);

  // can't divide by zero!
  if (boolSum === 0) {
    throw new Error(
      "At least one key from the 'include' parameter must be true!"
    );
  }

  // get distributed probability for each char set
  const chance = 1 / boolSum;

  const randomCharFromString = (str: string): string => {
    return str.charAt(Math.floor(Math.random() * str.length));
  };

  let res = "";
  while (res.length < length) {
    if (include.symbols && chanceOf(chance)) {
      res += randomCharFromString(symbols);
      continue;
    }
    if (include.numbers && chanceOf(chance)) {
      res += randomCharFromString(digits);
      continue;
    }
    if (include.lowercase && chanceOf(chance)) {
      res += randomCharFromString(alphabet);
      continue;
    }
    if (include.uppercase && chanceOf(chance)) {
      res += randomCharFromString(alphabet.toUpperCase());
      continue;
    }
  }
  return res;
}

/**
 * Get true or false depending on a probabilty. If number is greater
 * than 1, it will always return true; if it is less than 0, it will
 * always return false.
 * @param probability a number between 0 and 1 that represents the percent probability
 * @returns {boolean} true or false
 */
function chanceOf(probability: number): boolean {
  if (probability > 1) {
    return true;
  }
  if (probability < 0) {
    return false;
  }
  return Math.random() < probability;
}
