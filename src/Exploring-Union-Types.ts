class A {
	foo() { console.log('A.foo()...'); } 
	f2() { console.log('A.f2()...'); } 
}

class B { 
	foo() { console.log('B.foo()...'); } 
	f1() { console.log('B.f1()...'); } 
}

const instanceofAorB = function( val: any): val is A|B { 
	return val instanceof A || val instanceof B ;
}
	
const  call = function(val: string|A|B) { 
	
	if(instanceofAorB(val))
		val.foo(); 
	if( val instanceof A)
		val.f2();
	if( val instanceof B)
		val.f1();
}

call(new A());
call(new B());


