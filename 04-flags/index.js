/**
     * There are several flags you can specify to alter the RegEx behaviour. Flags may be appended to the end of a regex
        literal, such as specifying gi in /test/gi, or they may be specified as the second argument to the RegExp
        constructor, as in new RegExp('test', 'gi')
*/

/**
 *     g - Global. Finds all matches instead of stopping after the first.
 *     i - Ignore case. /[a-z]/i is equivalent to /[a-zA-Z]/.
 *     m - Multiline.
 *     ^ and $ match the beginning and end of each line respectively treating \n and \r as delimiters instead
    of simply the beginning and end of the entire string.
      y - Finds all consecutive/adjacent matches.
*/

    const re = /(o){1}/g;
    let result
    while ((result = re.exec('Rodrigo')) !== null) {
        console.log("found '" + result[0] + "', next exec starts at index '" + re.lastIndex + "'");
        }

    const ignoreCase = /(RodriGo)/i.test("rodrigo");

    const multLine = /(Lima)/.test("Lioma\nLikma LikmaLikmaLikmaLikmaLikma Likma LikmaLikmaLikma \n\r\nLima LikmaLikmaLikma");
    console.log(ignoreCase, multLine);