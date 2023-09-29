// TODO: rename this file from '.txt' to '.js'
function isPalindrome(str) {
 if (typeof str !== 'string') {
      console.log(`The given value: '${str}' is not a string! The expected data type of the value is string.`);
      return;
    }
  
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
  
    if (cleanStr === reversedStr) {
      console.log(`The given string: '${str}' is an example of a palindrome, the reversed value is: '${reversedStr}'`);
    } else {
      console.log(`The given string: '${str}' is not an example of a palindrome`);
    }
  }


// Call the function and pass an argument.
isPalindrome("hello world");    
isPalindrome("12321");          

