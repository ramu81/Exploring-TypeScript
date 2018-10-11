class X {
foo(){ console.log('X.foo() called...'); }
f1(){ console.log('X.f1() called...'); }
}

class Y {
foo(){ console.log('Y.foo() called...'); }
f2(){ console.log('Y.f2() called...'); }
}

const isXorY = function(value: any ): value is X|Y {
 return value instanceof X || value instanceof Y;
}

const recive = function(value: string|X|Y): any {
	
	if(isXorY(value))
		value.foo();
	
	
	if(value instanceof X ) 
		value.f1();
	

	if(value instanceof Y ) 
		value.f2();
	
}

recive('xyz');

recive(new X());

recive(new Y());