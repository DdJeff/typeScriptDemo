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
