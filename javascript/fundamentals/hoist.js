// 1
console.log(hello);                                   
var hello = 'world';                                 
/*
var hello;
console.log(hello); (prints "undefined")
hello = "world";
*/

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
/*
var needle = "haystack";
test(); (calls the function defined below this line)
var needle = "magnet";
consolt.log(needle); (prints "magnet")
*/

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
/*
var brendan = "super cool";
console.log(brendan); (prints "super cool" because the print() function was never called)
*/

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
/*
var food = 'chicken';
console.log(food); (prints "chicken")
eat() (calls function defined below this line)
food = "half-chicken"
console.log(food); (prints "half-chicken")
var food = "gone"
*/

// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
/*
mean(); (calls function but it's not defined. Should throw an error.)
*/

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
/*
var genre
console.log(genre); (prints "undefined")
genre = "disco";
rewind(); (calls the fucntion defined below it);
genre = "rock";
console.log(genre); (prints "rock")
var genre = "r&b";
console.log(genre); (prints "r&b")
console.log(genre); (prints "disco")
*/

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
/*
dojo = "san jose";
console.log(dojo); (prints "san jose")
learn(); (calls the function defined below this line)
var dojo
dojo = "seattle";
console.log(dojo); (prints "seattle")
dojo = "burbank";
console.log(dojo); (prints "burbank")
console.log(dojo); (prints "san jose")
*/

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
/*
console.log(makeDojo("Chicago", 65)); (calls function as defined below this line)
const dojo = {};
dojo.name = name; (dojo.name = Chicago)
dojo.students = students; (dojo.students = 65)
if(dojo.students > 50){
        dojo.hiring = true;
    }
return dojo (returns {name: "Chicago", students: "65", hiring: "true"} back to the original console.log function call)
console.log(makeDojo("Chicago", 65)); (prints the object from above now that the function has ran)

console.log(makeDojo("Berkeley", 0)); (calls function as defined below this line)
const dojo = {};
dojo.name = name; (dojo.name = Berkley)
dojo.students = students; (dojo.students = 0)
else if(dojo.students <= 0){
        dojo = "closed for now";
    }
return dojo (returns "closed for now" back to the original console.log function call)
console.log(makeDojo("Berkeley", 0)); (prints "closed for now" now that the function has ran)
*/