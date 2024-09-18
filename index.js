 //1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

    function calculateDifference(a, b) {
        return a - b;
}
    let output = calculateDifference(100,50);
    console.log(output);

  //2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

    function isOdd(num){
        return num % 2 !== 0;
    }
    console.log(isOdd(1,2));
    console.log(isOdd(2,3));

 //3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

    function findMin(number) {
        if (number.length === 0)

        return Math.min(...number);
 }
    let numbers= [10, 5, 8, 3, 7];
    console.log(findMin(numbers));

 /*4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing
  only the even numbers.
  */

    function filterEvenNumbers(arr) {
        return arr.filter(num => num % 2 === 0);
 }
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(filterEvenNumbers(numbers));

 //5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in
 // descending order.

    function sortArrayDescending(arr) {
        return arr.slice().sort((a, b) => b - a);
 }
    let numbers = [5, 2, 9, 1, 7];
    let sortedNumbers = sortArrayDescending(numbers);

    console.log(sortedNumbers);


 //6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

    function lowercaseFirstLetter(str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
 }
    console.log(lowercaseFirstLetter("Bangladesh"));

 //7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E,
 // I, O, U) in the string. It should filter vowels from the string.

    function countVowels(str) {
         const vowels = 'aeiouAEIOU';
         return [...str].filter(char => vowels.includes(char)).length;
 }
    console.log(countVowels("Tushar World"));

 //8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

    function findAverage(arr) {
        if (arr.length === 0) return 0; // Return 0 if the array is empty

        const sum = arr.reduce((acc, num) => acc + num, 0);
        return sum / arr.length;
 }
    const numbers = [100, 200, 300, 400, 500];
    console.log(findAverage(numbers));










