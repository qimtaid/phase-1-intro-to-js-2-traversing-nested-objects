// Title: Looping vs Iteration
// Code:

// Looping vs Iteration
// Explanation of the difference between looping and iteration.

for (let i = 0; i < array.length; i++) {
    // Loop body
  }
  
  // Title: Object Iteration with for...of
  // Code:
  
  // Iteration over arrays with the for...of statement.
  
  const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  
  for (const element of myArray) {
    console.log(element);
  }
  
  // Title: Enumerating Object Properties with for...in
  // Code:
  
  // Enumerate an object's properties with the for...in statement.
  
  const address = {
    street1: '11 Broadway',
    street2: '2nd Floor',
    city: 'New York',
    state: 'NY',
    zipCode: '10004',
  };
  
  for (const key in address) {
    console.log(key);
  }
  