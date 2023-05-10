function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) 


function createPhoneNumber(numbers) {
    // Check if the input array is valid
    if (!Array.isArray(numbers) || numbers.length !== 10 || !numbers.every(num => Number.isInteger(num) && num >= 0 && num <= 9)) {
      return "Invalid input";
    }
  
    // Format the phone number
    const areaCode = numbers.slice(0, 3).join('');
    const prefix = numbers.slice(3, 6).join('');
    const lineNumber = numbers.slice(6).join('');
    return `(${areaCode}) ${prefix}-${lineNumber}`;
  }

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


function createPhoneNumber(numbers){
   return"(" + numbers[0] + numbers[1] + numbers[2] + ") " + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9]
} 

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))