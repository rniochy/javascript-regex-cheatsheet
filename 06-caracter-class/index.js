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

 const OnecharacterOf = /[ab-d]/.exec("doe");
 const nonOnecharacterOf = /[^ab-d]/.exec("john");
 console.log(OnecharacterOf, nonOnecharacterOf);