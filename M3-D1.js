/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

let f1 = function (n1,n2){
    if (n1 === n2)
    return (n1+n2)*3 
    else return (n1+n2)
} 
 console.log(f1(3,3))
 console.log(f1(3,1))
 



/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

let f2 = function(n1,n2){
  if( (n1+n2 === 50) || (n1 === 50 || n2 === 50))
  return true
  else return false
 }
  

console.log(f2(25,25))
console.log(f2(24,25))
console.log(f2(50,25))
console.log(f2(25,50))

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

let f3 = function(string,pos){
return string.substr(0, pos) + string.substr(pos+1)
  }

console.log(f3("hello",1))




/* 4. Create a function to find and return the largest of three given integers. */
let f4 = function(n1,n2,n3){
    if ((n1>n2)&&(n1>n3))
    return n1
    else if ((n2>n1)&&(n2>n3))
    return n2
    else if ((n3>n1)&&(n3>n2))
    return n3
}
console.log(f4(1,2,3))
console.log(f4(5,6,7))
console.log(f4(11,12,13))


/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

    let f5 = function (n1,n2){
        if (((n1 <= 60 && n1 >=40) || (n1 <= 100 && n1 >=70)) && ((n2 <= 60 && n2 >=40) || (n2 <= 100 && n2 >=70)))
        return true
        else return false
      
    }
    console.log(f5(40, 61))
    console.log(f5(41, 60))
    console.log(f5(70, 101))
    console.log(f5(69, 100))
    console.log(f5(69, 101))
    console.log(f5(70,100))
/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

  


/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
   let f7 = function (string){
     if  (string.startsWith("Los") || (string.startsWith("New"))) return true;
     else return false;
    }  
    console.log(f7('Los2'))
    console.log(f7('New2'))
    console.log(f7('2New'))
    console.log(f7('2los'))  



/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */



/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */
    let f8 = function(array){
    if ((array.length === 2) && (array.includes(1) || array.includes(3)))
           return true
           else return false
          }
      
          console.log(f8([1, 0]))
          console.log(f8([0, 3]))
          console.log(f8([0, 2]))
         

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */ 

  


/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */ 


/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/


/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */



/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */


/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */

   
    let f15 = function(n1,n2){
        if (((n1 > 0 ) && (n2 < 0)) || (n2>0 && n1<0)) return true
        else return false 
        }
    console.log(f15(1,-1))
    console.log(f15(-1,1))
    console.log(f15(1,1))
    console.log(f15(-1,-1))
    
        

/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */

    function differentCase(string){
        if (string.length < 3) {
        return string.toUpperCase();
        } else {
        let first3 = string.substr(0,3)
        first3 = first3.toLowerCase()
        let theRest = string.substr(3)
        theRest = theRest.toUpperCase();
        return first3 + theRest
        }
    }
    




/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

let f17 = function(n1,n2){
     let n3= n1+n2
     if (n3>=50 && n3<=80) return "65"
     else return "80"
 }

console.log(f17(30,30))
console.log(f17(100,100))




/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */