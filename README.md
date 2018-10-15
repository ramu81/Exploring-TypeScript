# Exploring-TypeScript
 
 # Preface 
     -> TypeScript is a very well-planned type system that has type inference, structural subtyping, generic types,
    contextual typing, intersection types, literal types, union types, etc. 
    
    -> TypeScript is a structural type system. When we compare two different types, regardless of where they came
    from, if the types of all members are compatible, then we say the types themselves are compatible
    
    -> var declarations are accessible anywhere within their containing function, module, namespace, 
    or global scope - regardless of the containing block. Some people call this var-scoping or function-scoping. 
    Parameters are also function scoped.
    
    
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
         
  #  Inheritance (Inheritance.ts)
           In TypeScript, we can use common object-oriented patterns. One of the most fundamental patterns in 
         class-based programming is being able to extend existing classes to create new ones using inheritance.
         
           Inheritance.ts i.e., This example shows the most basic inheritance feature: classes inherit properties 
         and methods from base classes. Here, Dog is a derived class that derives from the Animal base class 
         using the extends keyword. Derived classes are often called subclasses, 
         and base classes are often called superclasses.
         
            Because Dog extends the functionality from Animal, we were able to create an instance of Dog that 
         could both bark() and move().
         
#  Generics (generics.ts)
    In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics,
    that is, being able to create a component that can work over a variety of types rather than a single one. 
    This allows users to consume these components and use their own types.
    
#  Intersection Types
    An intersection type combines multiple types into one. This allows you to add together existing types to get 
    a single type that has all the features you need. For example, Person & Serializable is a Person and 
    Serializable. That means an object of this type will have all members of all two types.
    
    You will mostly see intersection types used for mixins and other concepts that don’t fit in the classic 
    object-oriented mold. 
