function func(name: string, callback: (name: string)=> number): any {
	return callback(name);
}

console.log(func('ram',(name: string) => name.length ));