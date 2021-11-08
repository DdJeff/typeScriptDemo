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

