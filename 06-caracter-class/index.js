/**
 *  Character Classes are used to match regex based on them
*/

/**
 *  [ab-d]  - One character of: a,b,c,d
 *  [^ab-d] - One character except: a,b,c,d 
 *  [\b]    - backspace character
 *  \d  - One digit
 *  \D  - One non-digit
 *  \s  - One whitespace
 *  \S  - One non-white espace
 *  \w  - One word character
 *  \W  - One  non-word character
 */

 const backspace = /[\b]/.exec("\b");

 const oneDigit = /[\d]/.exec("abcdefgh7ijk");

 const nonOneDigit = /[\D]/.exec("abcdefgh7ijk");

 const oneWordCharacter = /[\w]/.exec("hello!");
 
 const noneOneWordCharacter = /[\W]/.exec("hello!");

 const oneWhitespace = /[\s]/.exec(" ");

 const nonOneWhitespace = /[\S]/.exec("Rodrigo");

 const onecharacterOf = /[ab-d]/.exec("doe");

 const nonOnecharacterOf = /[^ab-d]/.exec("john");

 console.log(onecharacterOf, nonOnecharacterOf, backspace,oneDigit, 
            nonOneDigit,oneWhitespace,nonOneWhitespace, oneWordCharacter,
            noneOneWordCharacter
            );