//  Regular expressions Groups

/**
     *  We use the Group in RegEx to group some patterns 
     * (...) - Capturing Group
     * (?:....) - Non-Capturing Group
     * \Y Match the Y'th Captured Group
 */

    const captureGroup = /(?:(Ro)(\w+)(o)$)/m.exec("Lima Rodrigo"); ///(?:(Ro)drig(o)$)/m.test("Lima Rodrigo");
    console.log(captureGroup);