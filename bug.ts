function printName(name?: string): void {
  console.log(name);
}

printName(); // This will print 'undefined', not an error
printName(undefined); // This will also print 'undefined', not an error