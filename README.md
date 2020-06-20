# Exploring-TypeScript
 
 # Preface 
     -> TypeScript is a very well-planned type system that has type inference, structural subtyping, generic types,
    contextual typing, intersection types, literal types, union types, etc. 
    
    -> TypeScript is a structural type system. When we compare two different types, regardless of where they came
    from, if the types of all members are compatible, then we say the types themselves are compatible
    
    -> var declarations are accessible anywhere within their containing function, module, namespace, 
    or global scope - regardless of the containing block. Some people call this var-scoping or function-scoping. 
    Parameters are also function scoped.
    
    tsc -t ES6 --outDir build --noEmitOnError src/fileName.ts
    
    * Java Script ==> is one of the ubiquitous language

* Ananmous function or arrow function or lambda expression which depends on external state,
which is called clouser. The clouser should be immutable. 

* Type System and Data Types (A very important aspect of every programming language)

* JavaScript is a dynamically typed language (some extensions exist that support strict typing, such as TypeScript)

* JavaScript has a pretty basic typeof operator for the purpose of type-checking.

* Prior to ES6, JavaScript had 6 data types. In the ES6 specification, the Symbol type was added. Here is a list of all the types: 1. String 2. Number 3. Boolean 4. null 5. undefined 6. Symbol 7. Object

* You may begin to wonder.what about arrays, functions, regular expressions, etc?

* typeof  :  The typeof operator in JavaScript is a unary operator that evaluates to a string indicating the type of its operand.

* Block scoped variables : in ES6, block-scoped variables declared using the "let" or "const" keywords will still throw a ReferenceError if they are used with the typeof operator before they are initialized. This is because: Block scoped variables remain in the temporal dead zone until they are initialized.

* The NaN value has a very special characteristic. It is the only JavaScript value that is never equal to any other value by comparison, including itself.

* Typing ==> static typing. statically & weakly typed language.

* Type Inferance : Static typing does not mean we have to type in the type details all the time

* Declare before use : TypeScript handles well the situation of undeclared variables

* Ambient Variables : lexical scope , What good are rules if there are no exceptions

* TypeScript have function declaraion overloding, not the function implementation.

* Equality : Equality is a mess in JavaScript, how does TypeScript measure up in that area?

* Equality and const : TypeScript has some surprises when dealing with const and equality

* Type Compatibility : TypeScript has some special rules for type cmpatibility

* Optional parameters : We take a look at optional parameters and compare it with default parameters

* rest parameters : The ES 6 rest operator shines well in TypeScript too, with a type

* spread operator

* Declaring a callback : The interplay of callbacks and type specification

* Creating a Lambda : Let's explore lambas, with types and such
	# let's start with a function
	# convert this function to a lambda
	# beaware of scoping 
	# regular functions
		@ all variables are lexical scope
		@ this will be dynamic scope
	# lambda exceptions
		@ everthing is lexical scoped

* Using Lambda expressions : We learn to use higher-order functions in TypeScript
	# lambda extension
	# ananymous function
	# highly concice
	# low cerymony 
	# less noise
	# Filter
	# Map
	# Reduce
	
* Lexical Scoping : Regular functions and lambdas use different scoping
	# scoping
	# Lexical Scoping
	# regular functions & scope
	# but this
	# lambda & scope
	
* Returning Lambdas : Oh that scope, when we return lambdas
	# we can return functions
	# we may return lambdas ?
	# what about scope ?
	
* Interfaces : While JavaScript has no such concept, TypeScript makes good use of interfaces
	# Useful to express intention
	# interfaces in other languages
	# TypeScript Interface
	# creating an interface
	# properties
	# methods
	# implementing
	
* Optional Properties : One of the most charming features of interfaces, optional properties
	# interfaces for enforcement 
	# if you don't care about particularly about a property
	# properties may be optional
	# let's explore with an example
	
* Structural Mapping : One of the coolest features of TypeScript that makes possible to interoperate with JavaScript that has no interfaces
	# very intersting & useful feature
	# implementing an interface
	# structural mapping
	# using structural mapping
	
* Callbacks Revisited : We see how interfaces help define callbacks more elegantly
	# writing a function with callback
	# writing once ok, write multiple times
	# interfaces to the rescue
	# but wait's what the method name?
	# ah, a nice trick
    
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
    
#  Intersection Types (IntersectionTypes.ts)
    An intersection type combines multiple types into one. This allows you to add together existing types to get 
    a single type that has all the features you need. For example, Person & Loggable is a Person and 
    Loggable. That means an object of this type will have all members of all two types.
    
    You will mostly see intersection types used for mixins and other concepts that don’t fit in the classic 
    object-oriented mold. 
    
#   Union Types (UnionTypes.ts) 
      Union types are closely related to intersection types, but they are used very differently. 
      Occasionally, you’ll run into a library that expects a parameter to be either a number or a string.
