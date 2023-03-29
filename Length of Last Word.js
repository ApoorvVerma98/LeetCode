//5.Length of Last Word//
  
var lengthOfLastWord = function(s) {
    let length = 0;
  let foundLastWord = false;
  
  for (let i = s.length - 1; i >= 0; i--) {
   if (s[i] !== " ") {
     foundLastWord = true;
     length++;
   } else if (foundLastWord) {
     break;
   }
  }
  
  return length;
  };
