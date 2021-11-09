var hello = "world"; //implicit
var hello2 = "world"; //explicit
//function
var getFullname = function (name, lastName) {
    return name + " " + lastName;
};
///
var user = {
    name: "tom",
    age: 30
};
var user2 = {
    name: "tom",
    age: 30
};
var myCar = {
    make: "Honda",
    model: "Odd",
    hunkHorn: function () {
        return "honk";
    }
};
//types and Unions
//Union operators
var pageNumber = "1"; //so it could be either or, usecae with null then real type
var errorMessage = null;
var user3 = null;
var populareTags = ["one", 'two'];
//void
var doSomthing = function () {
    console.log("doSomthing");
};
//any (worst type) use as less as possible
var test = "mouse";
//never
var neverdoSomthing = function () {
    //console.log("doSomthing"); //can not have a code that ends
    throw "never"; //it never ends
};
//unknown => better then type any
var vAny = 10;
var vUnknown = 10;
var s1 = vAny; //will allow
//let s2: string = vUnknown; //will not allow to define unknown by another type
var youtubeVideo = 'https://www.youtube.com/watch?v=gp5H0Vw39yw&t=434s';
console.log(youtubeVideo);
