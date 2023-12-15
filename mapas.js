"use strict";
let studentScores = new Map([["luke", 90], ["han", 100], ["leia", 95]]);
console.log("---- Map Crudo ----");
console.log(studentScores);
studentScores.set("chewbacca", 75);
console.log("Tamaño del Mapa: " + studentScores.size);
studentScores.set("han", 75);
console.log(studentScores.get("han"));
console.log("---- Map Keys ----");
console.log(studentScores.keys());
for (let key of studentScores.keys()) {
    console.log(key);
}
console.log(studentScores.values());
console.log(studentScores.entries());
// Ejemplos de Set
let courses = new Set(["Angular", "TypeScript", "Angular"]);
courses.add("Java");
console.log(courses);
console.log(courses.size);
console.log(courses.values());
console.log(courses.has("Angular"));
courses.forEach(function (element) {
    console.log(element);
});
