var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study",
    "eat healthy"
];

// for (let i = 0; i < todos.length; i++){
//     todos[i] = todos[i] + "!";
//     console.log(todos[i]);
// }

todos.forEach(function(todo, i){
    todos[i] = todo + "!";
    console.log(todo);
})


// var todosLength = todos.length;
// for (let i = 0; i < todosLength; i++) {
//     todos.pop()
// }

// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++;
// }

// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--;
// }

// var counterTwo = 10;
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);




var userold = {
    name: "John",
    age: 34,
    hobby: "Football",
    isMarried: false,
    spells: ["Abrakadabra", "shazem"],
    shout: function () {
        console.log("AHHH");
    }
};


var list = [
    {
        username: "andy",
        password: "secret"
    },
    {
        username: "jess",
        password: "123"
    }
];

// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".


var user = {
    username: "John",
    password: "123"
};

var database = [
    {
        username: "John",
        password: "123"
    },
    {
        username: "Adam",
        password: "456"
    },
    {
        username: "Sam",
        password: "789"
    }
];


var newsfeed = [
    {
        username: "John",
        timeline: "I am bored!"
    },
    {
        username: "Steve",
        timeline: "I am excited"
    },
    {
        username: "Martha",
        timeline: "I am tired"
    }
];

var userNamePrompt = prompt("Whatts your username?");
var passwordPrompt = prompt("What's your password?");


function isUserValid(user, pass) {
    for (let i = 0; i < database.length; i++) {
        if (user === database[i].username && pass === database[i].password) {
            return true;
        }
    }
    return false;
}


function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsfeed);
    } else {
        alert("Wrong user/pass");
    }
}

signIn(userNamePrompt, passwordPrompt);



// if (user === database[0].username && pass === database[0].password) {
//     console.log(newsfeed)
// } else {
//     alert("Wrong username and password");

// }