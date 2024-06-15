//Length
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let length = str.length;
console.log(length);

//Char at
let shoby="Hello World";
let char= shoby.charAt(6);
console.log(char);

//Slice
//slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).

let bobby="Foolish People";
let dark= bobby.slice(0,6);
console.log(dark);

//SubString
//substring() is similar to slice().
// The difference is that start and end values less than 0
//  are treated as 0 in substring().

//UperCase
//LowerCase

let name="Shoaib Shaikh";
let oper= name.toUpperCase();
let lowwer= name.toLowerCase()
console.log(oper);
console.log(lowwer);

//Concat
//concat() joins two or more strings:

let text1="Shoaub";
let text2="Shaikh";
let text3= text1.concat(" ",text2);
console.log(text3);

//Trim
//The trim() method removes whitespace from both sides of a string:
let text4= "           Shoby";
let text5= text4.trim();
console.log(text5);

//trimStart()
//The trimStart() method works like trim(), but removes whitespace 
//only from the start of a string.

//trimEnd()
//The trimEnd() method works like trim(),
// but removes whitespace only from the end of a string.

//repeat()
//The repeat() method returns a string with a number of copies of a string.

//The repeat() method returns a new string.

//The repeat() method does not change the original string
let text6="hy bobby";
let text7=text6.repeat(3);
console.log(text7);

//Replace()
//The replace() method replaces a specified value with another value in a string:
let tex="please like page";
let tex1 = tex.replace("page","channel")
console.log(tex1);

//Split
//A string can be converted to an array with the split() method: