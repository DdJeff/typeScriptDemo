let hello = "world"; //implicit
let hello2: string = "world"; //explicit

//function
const getFullname = (name: string, lastName: string) =>{
    return `${name} ${lastName}`;
}

///

const user:{name: string, age: number} = { //this sets what type of data in obj
    name: "tom",
    age: 30
};

//interfaces => creates objs with props

interface IUser{
    name: "tom",
    age?: 30 //? makes it optional
}

const user2: IUser = { //=> replaces ...user:{name: string, age: number}...
    name: "tom",
    age: 30
};

//interfaces with functions

interface ICar{
    make: string,
    model: string,
    hunkHorn(): string;
}

const myCar:ICar = {
    make: "Honda",
    model: "Odd",
    hunkHorn (){ //note no arrow
        return "honk";
    },
}

//types and Unions

//Union operators
let pageNumber : string | number = "1"; //so it could be either or, usecae with null then real type

let errorMessage : string | null = null;

let user3 : IUser | null = null;

// type Alias 

type ID = string; //Alias
type PopularTag = string;
type MaybePopular = PopularTag | null; //type and unions

interface IPerson {
    id: ID;//best practice to create an Id type to use inside interface
}

const populareTags: PopularTag[] = ["one", 'two'];

//void
const doSomthing = ( ): void => {
    console.log("doSomthing");
};

//any (worst type) use as less as possible

let test : any = "mouse";

//never
const neverdoSomthing = ( ): never => {
    //console.log("doSomthing"); //can not have a code that ends
    throw "never"; //it never ends
};

//unknown => better then type any

let vAny:any = 10;
let vUnknown:unknown = 10;

let s1: string = vAny; //will allow
//let s2: string = vUnknown; //will not allow to define unknown by another type

let youtubeVideo : string = 'https://www.youtube.com/watch?v=gp5H0Vw39yw&t=434s';

console.log(youtubeVideo);
//46:58

//type assertion
let s2: string = vUnknown as string;

let page : string = "2";

let number : number = page as unknown as number; //to convert a string to a number

//working with dom

const someElement = document.querySelector(".foo") as HTMLInputElement;

console.log("someElement", someElement.value);

//adding listener

someElement.addEventListener('blur', event => {
    const target = event.target as HTMLInputElement;
    console.log('event', target.value);
    
})
