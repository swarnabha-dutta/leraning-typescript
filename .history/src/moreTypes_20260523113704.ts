let response: any = "42";

// ForceFully Type Assertion
let numericLength: number = (response as string).length;

type Book = {
    name:string,
}

let bookString = '{"name":"one thing"}';
let bookObject = JSON.parse(bookString);

console.log(bookObject)