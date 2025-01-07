// https://youtu.be/BceIT1Lke-E

// Pure Functions

// 1. Always returns the same output, for a given input. 
// 2. No side-effects.

// ❌

let user = "Hanza";

function badCode() {
    console.log(`Hellow, ${user}`);
}

badCode();
user = "Dev";
badCode();
user = "Quoli";
badCode();


// ✅
let name = "Sina";

function salut(name) {
    console.log(`Hello, ${name}`);
}

salut("Shiv");
salut("Kendall");
salut("Roman");