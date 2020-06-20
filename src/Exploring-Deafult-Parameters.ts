class Book { 
	constructor(public name: string,public author: string){}
}

const books: Book[] = [ new Book('Java','Ramudu'),
						new Book('C++','Vasantha'),
						new Book('Scala','Sai Charan')];
						
function sortBy(books: Book[], prop: string = 'name') : Book[] {
	return books.sort((book1,book2) => book1[prop].localeCompare(book2[prop]));
}

console.log(sortBy(books));
console.log(sortBy(books,'author'));