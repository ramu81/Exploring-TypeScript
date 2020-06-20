function max(...numbers: number[]) {
	return numbers.reduce((large,num) => num>large? num : large);
}

console.log(max(8,4,2));

const numbers: any[] = [4,2,5,8,1];

const string: any[] = ['Ram,'Vasu','Sai'];

console.log(max(...numbers));
