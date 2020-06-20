function func(aFunc: (name: string, id: number) => any ){
	console.log('Called...');
	aFunc(name,id);
}

//function f0() {}
//func(f0);

//function f1(name: string) {}
//func(f1);

function f2(name: string, id: number ) { console.log(` Name: ${name} ${id}`);}
func(f2);