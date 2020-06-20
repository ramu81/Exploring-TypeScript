function func(a: number);
function func(a: string);
function func(a: string,b: string);

function func(...number) {
	console.log(number);
}

func(1);
func('Ram');
func('Ram','Kondapalli');