let response: any = "42";

// ForceFully Type Assertion
let numericLength: number = (response as string).length;

type Book = {
    name:string,
}

let bookString = '{"name":"one thing"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);


const inputElement = document.getElementById("username") as HTMLInputElement;



let value: any;

value = "cnajkc";
value = [1, 34, 5];
value = 2.3


value.toUpperCase();




let newValue: unknown;

newValue = "cnajkc";
newValue = [1, 34, 5];
newValue = 2.3

if(typeof )