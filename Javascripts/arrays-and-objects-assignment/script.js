// TASK 1 


let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    isRead: false
}
// Accessing properties
//Dot notation
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.isRead);
// Bracket notation
console.log(book["title"]);
console.log(book["author"]);
console.log(book["pages"]);
console.log(book["isRead"]);

// updating is read
book.isRead = true;
console.log(book.isRead);

// Adding a new property
book.genre = "Fiction";
console.log(book.genre);

console.log(book);

//

// TASK 2
let movies = [   
    {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
    },
    {
        title: "The Matrix",
        director: "The Wachowskis",
        year: 1999,
    },
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
    }
];
console.log(movies[1].title);
movies.push ({
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
});
// console.log(movies); (for debugging purposes)

movies[0].year = 2023;
console.log(movies)

// TASK 3 

let student = {
    name: "Jacob Panesa",
    age: 21,
    subjects: ["Web Fundamentals", "Discrete Structures","CC5"]
}
console.log(student.subjects[0]);
student.subjects.push("CC6");
console.log(student);

// optional but I will try

let recipe = {

    name: "Pritong Itlog",
    ingredients: ["Itlog", "Mantika", "Asin"],
    quantity: ["2", "1 tablespoon", "1/8 teaspoon"],
    isVegetarian: false,
}
recipe.ingredients.push("Sibuyas");
console.log(recipe.ingredients[1]);
console.log(recipe);