
function count(selector) {
    return селекторы_запросов.querySelectorAll(selector).length;
    }
    console.log(count("p"));           // All <p> elements
    // → 4
    console.log(count(".animal"));     // Class animal
    // → 2
    console.log(count("p .animal"));   // Animal inside of <p>
    // → 2
    console.log(count("p > .animal")); // Direct child of <p>
    // → 1
