// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

function isValid(str) {
  const opening = ["(", "[", "{"];
  const closing = [")", "]", "}"];
  const stack = [];

  splitStr = str.split("");

  //add opening brackets to the stack
  for (let i = 0; i < splitStr.length; i++) {
    if (opening.includes(splitStr[i])) {
      stack.push(splitStr[i]);
    }
    if (closing.includes(splitStr[i])) {
      //remove opening brackets from the stack if the indexes match
      const corresponding = opening[closing.indexOf(splitStr[i])];
      if (stack.pop() !== corresponding) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = isValid;
