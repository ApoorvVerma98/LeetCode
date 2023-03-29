//3. Valid Parentheses//
var isValid = function(s) {
    const stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (pairs[char]) {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      const last = stack.pop();
      if (pairs[last] !== char) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
  };
  console.log(isValidParentheses);
  