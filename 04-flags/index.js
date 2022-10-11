/**
     * There are several flags you can specify to alter the RegEx behaviour. Flags may be appended to the end of a regex
        literal, such as specifying gi in /test/gi, or they may be specified as the second argument to the RegExp
        constructor, as in new RegExp('test', 'gi')
*/

/**
 *     g - Global. Finds all matches instead of stopping after the first.
 *     i - Ignore case. /[a-z]/i is equivalent to /[a-zA-Z]/.
 *     m - Multiline. ^ and $ match the beginning and end of each line respectively treating \n and \r as delimiters instead
    of simply the beginning and end of the entire string.
       u - Unicode. If this flag is not supported you must match specific Unicode characters with \uXXXX where XXXX is the
character's value in hexadecimal.
      y - Finds all consecutive/adjacent matches.
*/