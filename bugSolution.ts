function printName(name?: string): void {
  if (name === undefined) {
    console.log('No name provided');
  } else {
    console.log(name);
  }
}

printName(); // Prints 'No name provided'
printName(undefined); // Prints 'No name provided'
printName("Alice"); // Prints "Alice"

//Alternative solution using the nullish coalescing operator
function printName2(name: string | null = null): void {
  const nameToUse = name ?? "Anonymous";
  console.log(nameToUse);
}
printName2(); //Prints "Anonymous"
printName2(undefined); //Prints "Anonymous"
printName2("Bob"); //Prints "Bob"