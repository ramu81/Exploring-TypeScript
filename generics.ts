function identity<T>(arg: T): T {
    return arg;
}

console.log(identity("myString"));

console.log(identity(10));

console.log(identity(true));