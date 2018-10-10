class X {
foo(){ console.log('X.foo() called...'); }
}

class Y {
func(){ console.log('Y.func() called...'); }
}

const recive = function(value: number|string|X|Y): any {
	
	console.log('value :  '+value );
	
	if(typeof(value) === 'string' ) {
	console.log('value length : '+value .length);
	}
	
	if(value instanceof X ) {
		value.foo();
	}

	if(value instanceof Y ) {
		value.func();
	}
}

recive(1);

recive('xyz');

recive(new X());

recive(new Y());