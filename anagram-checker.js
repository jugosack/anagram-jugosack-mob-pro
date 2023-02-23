module.exports = function (stringA, stringB) {
  /*First, we remove any non-alphabet character using regex and convert       
        convert the strings to lowercase. */
        
        stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
        stringB = stringB.replace(/[^\w]/g, '').toLowerCase()
  
          /*Next, we check if the lengths of the strings are equal. 
          If they are anagrams, they will have the same length. */
         if (stringA.length !== stringB.length) {
              return false
          }
  
          let arrB = stringB.split("")
  
          for (let char of stringA ){ 
              if (!arrB.includes(char)) {
                  return false
                  break;
              } else {
                  arrB.splice(arrB.indexOf(char), 1)
              }
          }
  
          return true
  
}
 