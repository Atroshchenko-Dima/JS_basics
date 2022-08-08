const JOURNAL = require("./JOURNAL");

for  (let i = 0; i < JOURNAL.length; i++) {
    let entry = JOURNAL[i];
    // сделать что-то с entry
    console.log(`${entry.events.length} событий.`);
}

// более простой способ

for (let entry of JOURNAL) {
    console.log(`\n${entry.events.length} событий.`);
}

