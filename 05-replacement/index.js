/** 
 *  Replacement 
 *  Substitutions are language elements that are recognized only within replacement patterns. 
 * They use a regular expression pattern to define all or part of the text that is to replace matched text in the input string.
*/


/**
 * Substitutions are language elements that are recognized only within replacement patterns.
 * 
 * The replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement. 
 * The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match.
 */


/**
 * $Y - Insert Y'th captures group - Includes the last substring matched by the capturing group that is identified by number.
 * ${name} - Includes the last substring matched by the named group that is designated by (?<name> ) in the replacement string.
 * $$ - Includes a single "$" literal in the replacement string.
 * $& - Includes a copy of the entire match in the replacement string.
 * $` - Includes all the text of the input string before the match in the replacement string.
 * $' - Includes all the text of the input string after the match in the replacement string.
*/

let str = "foo";
const regexNumberGroup = /(f)/;
str = str.replace(regexNumberGroup, "$1 go")
console.log(str);

let str1 = "foo";
const regexNamedGroup = /(?<group>f)/;
str1 = str1.replace(regexNamedGroup, "$<group> ")
console.log(str1);

let str2 = "foo";
const regexSingleLiteral$ = /(f)/;
str2 = str2.replace(regexSingleLiteral$, "$$")
console.log(str2);

let str3 = "foo";
const regexIntereMatch = /(f)/;
str3 = str3.replace(regexIntereMatch, "$& ")
console.log(str3);

let str4 = "foo";
const regexAlltextBeforeMatch = /(f)/;
str4 = str4.replace(regexAlltextBeforeMatch, "$` ")
console.log(str4);

let str5 = "foo";
const regexAlltextAfterMatch = /(f)/;
str5 = str5.replace(regexAlltextAfterMatch, "$' ")
console.log(str5);