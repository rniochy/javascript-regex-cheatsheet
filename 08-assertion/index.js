/**
 * ^ - start of string
 *  $ - end of string
 * \b - word boundary
 *  \B - Non-word boundary
 * (?= ...) - Positive lookhead - The syntax is: X(?=Y), it means "look for X, but match only if followed by Y". There may be any pattern instead of X and Y.
 * (?! ...) - Negative lookhead
*/

const startOfString = /^J/.exec("Joh Doe");
const endOfString = /e$/.exec("Joh Doe");

const wordBoundary = /\bJohn\b/.exec("John Doe");
const NonWordBoundary = /\BJohn\B/.exec("John Doe");
/**
 *  WORD BOUNDARY
 *  We can use \b not only with words, but with digits as well. 
 * */ 
const wordBoundaryWithDigits = /\b\d\d\b/g.exec("1 23 456 78");

const lookhead = /\d+(?=€)/.exec("1 turkey costs 30€");
const negativeLookhead = /\d+(?!€)/.exec("1 turkey costs 30€");


console.table(startOfString);
console.table(endOfString);
console.table(wordBoundary);
console.table(wordBoundaryWithDigits);
console.table(NonWordBoundary);
console.table(lookhead);
console.table(negativeLookhead);

// BONUS ..
/**
 *  (?<= ...) Lookbehind
 * Lookbehind is similar, but it looks behind. That is, it allows to match a pattern only if there’s something before it.
 * 
*/
 const lookbehind = /(?<=\$)\d+/.exec("1 turkey costs $30");
 const negativeLookbehind = /(?<!\$)\d+/.exec("1 turkey costs $30");
 console.table(lookbehind);
 console.table(negativeLookbehind);
