//  Regular expressions Groups

/**
 * A part of a pattern can be enclosed in parentheses (...). This is called a “capturing group”.

That has two effects:

It allows to get a part of the match as a separate item in the result array.
If we put a quantifier after the parentheses, it applies to the parentheses as a whole. */ 

/**
     *  We use the Group in RegEx to group some patterns 
     * (...) - Capturing Group
     * (?:....) - Non-Capturing Group, Using the form (?:pattern), these work in a similar way to capture groups, except they do not store the contents
                of the group after the match.
     * \Y Match the Y'th Captured Group ???
 */

    const captureGroup = /((Ro)(\w+)(o)$)/.exec("Lima Rodrigo"); // Capture the group where match

    const noncaptureGroup = /((?:Ro)drig(o)$)/.exec("Lima Rodrigo"); 
    console.log(captureGroup, noncaptureGroup);


    const str1 = "Gogogo John!";

    // ?: excludes 'go' from capturing
    const regexp = /(?:go)+ (\w+)/i;

    const result = str1.match(regexp);

    console.log( result[0] ); // Gogogo John (full match)
    console.log( result[1] ); // John
    console.log( result.length ); // 2 (no more items in the array

    // Named Groups
    /**
          Remembering groups by their numbers is hard. For simple patterns it’s doable, but for more complex ones counting parentheses is inconvenient. We have a much better option: give names to parentheses.
        That’s done by putting ?<name> immediately after the opening paren.
     */
    const dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
    const str = "2019-04-30";

    const groups = str.match(dateRegexp).groups;