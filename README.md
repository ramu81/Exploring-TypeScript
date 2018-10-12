# Exploring-TypeScript

  #  Type Guards (typeguard.ts)
       # Working with union types
       # Type assertion   
       # How to access specific methods? 
       # typeof   
       # instanceof
       # type guards 
  #  User Defined Type Guards (userdefinedtypeguard.ts)
       # what if we use our own function
       # now we can tell TypeScript to use type guard 
  #  Enums and const Enums (enums.ts)
      #  enum
      #  const enums
      #  JavaScript Object
  #  Classes (Greeter.ts) (Greeter.js)
      # Introduction  
         Traditional JavaScript uses functions and prototype-based inheritance to build up reusable components, 
         where classes inherit functionality and objects are built from these classes. Starting with ECMAScript 2015,
         also known as ECMAScript 6, JavaScript programmers will be able to build their applications using this
         object-oriented class-based approach.
         
         In TypeScript, we allow developers to use these techniques now, and compile them down to JavaScript that 
         works across all major browsers and platforms, without having to wait for the next version of JavaScript.
         
         The syntax should look familiar if you’ve used C# or Java before. We declare a new class Greeter. 
         This class has three members: a property called greeting, a constructor, and a method greet.  
         "this" keyword denotes that it’s a member access.
         
         In the last line we construct an instance of the Greeter class using new. 
         This calls into the constructor we defined earlier, creating a new object with the Greeter shape, 
         and running the constructor to initialize it.
