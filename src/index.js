module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBrackets = [];
  let closeBrackets = [];
  
  
  bracketsConfig.forEach(el => {
    openBrackets.push(el[0]);
  })
  bracketsConfig.forEach(el => {
    closeBrackets.push(el[1]);
  })
  
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    
    if(openBrackets.includes(currentSymbol) && stack.includes(currentSymbol) && closeBrackets.includes(currentSymbol)) {
      stack.pop();
      
    } else if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if(stack.length == 0) {
        return false;
      } else if (openBrackets.includes(currentSymbol) && closeBrackets.includes(currentSymbol) && stack.length !== 0) {
        
      }
      
      let topElement = stack[stack.length - 1];
      //console.log(stack);
      
      bracketsConfig.forEach((el) => {
        if(el[0] === topElement && el[1] === currentSymbol) {
          stack.pop();
          
          
        } else {
          return false;
        }
      })
      
    }
  }
  return stack.length === 0;
}
