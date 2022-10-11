//  Regular expressions Groups

/**
     *  We use the Group in RegEx to group some patterns 
     * (...) - Capturing Group
     * (?:....) - Non-Capturing Group, Using the form (?:pattern), these work in a similar way to capture groups, except they do not store the contents
                of the group after the match.
     * \Y Match the Y'th Captured Group ???
 */

    const captureGroup = /((Ro)(\w+)(o)$)/.exec("Lima Rodrigo"); // Capture the group where match

    const noncaptureGroup = /(?:(Ro)drig(o)$)/.exec("Lima Rodrigo"); 
    console.log(captureGroup, noncaptureGroup);