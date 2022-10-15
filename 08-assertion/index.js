/**
 * ^ - start of string
 *  $ - end of string
 * \b - word boundary
 *  \B - Non-word boundary
 * (?= ...) - Positive lookhead
 * (?! ...) - Negative lookhead
*/

const startOfString = /^J/.exec("Joh Doe");
const endOfString = /e$/.exec("Joh Doe");
const wordBoundary = /\b/.exec("John Doe");
console.table(startOfString);
console.table(endOfString);
console.table(wordBoundary);