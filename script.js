// Your Script here.
function rot13(encodedString) {
  // Define the ranges for uppercase letters
  const rangeStart = 'A'.charCodeAt(0);
  const rangeEnd = 'Z'.charCodeAt(0);

  // Convert the encoded string to an array of characters
  const encodedChars = encodedString.split('');

  // Iterate through each character in the encoded string
  const decodedChars = encodedChars.map((char) => {
    // Convert the character to its ASCII code
    const charCode = char.charCodeAt(0);

    // Check if the character is within the range of uppercase letters
    if (charCode >= rangeStart && charCode <= rangeEnd) {
      // Apply ROT13 transformation by shifting the character code by 13 positions
      let decodedCharCode = charCode - 13;

      // Handle wraparound if the decoded character code is less than the range start
      if (decodedCharCode < rangeStart) {
        decodedCharCode += 26;
      }

      // Convert the decoded character code back to a character
      return String.fromCharCode(decodedCharCode);
    }

    // Return non-alphabetic characters as they are
    return char;
  });

  // Join the decoded characters into a string
  const decodedString = decodedChars.join('');

  return decodedString;
}

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   let decodedArr = []; // Your Result goes here
  // Only change code below this line

  return ;//return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
