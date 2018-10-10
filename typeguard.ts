class X {
foo(){ console.log('X.foo() called...'); }
}

class Y {
func(){ console.log('Y.func() called...'); }
}

const recive = function(value: string|X|Y): any {
	
	( <string> value ).length;
	
	//( <X> value ).foo();
	//( <Y> value ).func();
	
	if(typeof(value) === 'string' ) 
		console.log('value length : '+value .length);
	
	
	if(value instanceof X ) 
		value.foo();
	

	if(value instanceof Y ) 
		value.func();
	
}

recive('xyz');

recive(new X());

recive(new Y());