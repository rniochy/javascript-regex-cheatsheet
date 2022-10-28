/** 
 *  Replacement 
 *  Substitutions are language elements that are recognized only within replacement patterns. 
 * They use a regular expression pattern to define all or part of the text that is to replace matched text in the input string.
*/


/**
 * $number - 	Includes the last substring matched by the capturing group that is identified by number.
 * ${name} - Includes the last substring matched by the named group that is designated by (?<name> ) in the replacement string.
 * $$ - Includes a single "$" literal in the replacement string.
 * $& - Includes a copy of the entire match in the replacement string.
 * $` - Includes all the text of the input string before the match in the replacement string.
 * $' - Includes all the text of the input string after the match in the replacement string.
 * $Y - Insert Y'th captures group
*/