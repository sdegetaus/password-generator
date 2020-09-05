/**
 * Get a random string according to provided length and what set of characters to include
 * (symbols, numbers, lowercase, uppercase, etc).
 * @param {number} length desired length
 * @param {object} include boolean key/value pairs
 * @returns {string} a random string
 */
export function randomString(
  length: number,
  include: {
    symbols: boolean;
    numbers: boolean;
    lowercase: boolean;
    uppercase: boolean;
    accented: boolean;
  }
): string {
  // char sets
  const symbols = ";,:.¡!¿?/\\(){}[]<>+-_*=^~`'°|¬@#€$%&";
  const digits = "0123456789";
  const alphabet = "abdcefghijklmnopqrstuvwxyz";
  const accented = "áéíóúàèìòùâêîôûñäëïöü";

  // sum of all the "true" values from the include param
  const boolSum = [
    include.symbols,
    include.numbers,
    include.lowercase,
    include.uppercase,
    include.accented,
  ].reduce((p, c) => (c === true ? p + 1 : p), 0);

  // can't divide by zero!
  if (boolSum === 0) {
    throw new Error(
      "At least one key from the 'include' parameter must be true!"
    );
  }

  // get distributed probability for each char set
  const chance = 1 / boolSum;

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

    if (include.accented && chanceOf(chance)) {
      res += randomCharFromString(
        chanceOf(0.5) ? accented : accented.toUpperCase()
      );
    }
  }

  // temp error catcher
  if (res.length !== length) {
    throw new Error("INCORRECT Lenght!");
  }

  return res;
}

/**
 * Get a single, random character from a string
 * @param {string} str string to select from
 * @returns {string} random character as string
 */
function randomCharFromString(str: string): string {
  return str.charAt(Math.floor(Math.random() * str.length));
}

/**
 * Get true or false depending on a probabilty
 * @param probability a number between 0 and 1 that represents the percent probability
 * @returns {boolean} whether true or false
 */
function chanceOf(probability: number): boolean {
  return Math.random() < probability;
}
