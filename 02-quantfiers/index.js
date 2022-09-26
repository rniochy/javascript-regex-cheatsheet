//  Regular expressions Quantifiers

/**
 * We use Quantifers to quantify how many  matches we have in our pattern   
 * 
 *  * - Zero ou more matches
 *  + - One ou more matches
 *  ? - Zero ou one
 *  {} - is to match the amount defined as:
 *  {2} - exactly 2 
 *  {2, 5} - Between  2 an 5
 *  {2, } -2 or more 
 * */
  
   // let pattern = new RegExp("")
   const zeroOrMore = /g*/.test("RRRRRRRRRRRRR");
   const zeroOrOne = /R?/.test("");
   const oneOrMore = /R+/.test("RR")
   const exactlySix = /R{2}/.test("RRR");
   const betweenThreeAndSix = /(R{2,6})/.test("RRRRRRR");
   const SixOrMore = /R{6,}/.test("RR");
    console.log(zeroOrMore, oneOrMore, exactlySix, betweenThreeAndSix,SixOrMore);

    const result = new RegExp('[^(\"\")+]');
    console.table(result.exec('""MMMMMw'));