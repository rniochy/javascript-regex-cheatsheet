//  Regular expressions  Creating a RegExp Object */

// Standard Creation - 
/* It is recommended to use this form only when creating regex from dynamic variables.
Use when the expression may change or the expression is user generated. */
 var pattern = new RegExp(".*"); 
 
 // Static initialization
 /** Use when you know the regular expression will not change
    and you know what the expression is before runtime. */
 var pattern = /.*/;

 /* To check if string contains pattern we can use two functions 
  .test() && .exec() */

  // .test() - Return true if the match pattern 
  let str = "Rodrigo Lima - @rniochy"
  console.log(pattern.test(str));

 // .exec() - returns an array of captures, or null if there was no match.
 /*
      match[0] - is the full match string.
      match[1]  - match.index - location of the match.
      match[2] - match.input - value input 
      match[3] is the text corresponding to the first captured group. match[n] would be the value of the nth captured
      group.
 */
  let result =  pattern.exec(str);
  const {index, input, groups} = result;
  console.log(result[0], index, input, groups, result);

  // Bonus of basic concept 
  /* In Regular Expression (RegEx) we can match using*/
   /**
    *  . - dot Any character except new line 
    *  a - The character a
    *  ab - The character ab 
    *  a|b - a or b 
    *  a* - 0 or more a's
    * \ - Escapes a special character 
    */
     const dot = /./.test("rodrigoLimarniochy");
     const character = /R/.test("R");
     const moreCharacter = /Ro/.test("Ro");
     const characterORother = /R|r/.test("r");  // Change to R 
     const zeroOrMoreCharacter = /r*/.test("o");
     const specialCharacterEscape = /\(/.test('(');
     console.log(dot, character, moreCharacter, characterORother,zeroOrMoreCharacter, specialCharacterEscape);  
    

