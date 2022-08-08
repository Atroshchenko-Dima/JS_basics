const prompt = require('prompt-sync')();

switch (prompt("What is the weather? ")) {
    case "rain":
        console.log("Don't forget to take an umbrella");
        break; 
    case "sunny":
        console.log("Dress lightly");
    case "cloudy":
        console.log("Go take a walk");
        break;
    default:
        console.log("Unknown weather!");
        break;
}

/* dasdasdas
dasdasdas
dasdasdas
dasdasdasdas
dasdasdas
*/