interface PrintMsg { (name: string): void }

const hello = function(message: string, callback: PrintMsg){ callback(message); }

const hi = function(message: string, callback: PrintMsg){ callback(message.toUpperCase()); }

hello('Hello Ram', (msg: string) => console.log(msg));

hi('Hi Ram', (msg: string) => console.log(msg));