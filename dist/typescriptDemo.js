var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
//46:58
//type assertion
var s2 = vUnknown;
var page = "2";
var number = page; //to convert a string to a number
//working with dom
var someElement = document.querySelector(".foo");
console.log("someElement", someElement.value);
//adding listener
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
//classes in ts
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFullname = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
var user4 = new User('deontay', 'jefferson');
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(User));
var manager = new Admin("D", "Jeff");
//generics
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user5 = {
    name: 'Jack',
    data: {
        meta: "foo"
    }
};
var user6 = {
    name: "John",
    data: ['foo', 'buzz']
};
//const results = addId<UserInterface>(user5);
