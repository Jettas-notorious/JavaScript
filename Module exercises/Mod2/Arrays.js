let books=[
    {
        title:"Speaking JavaScript",
        author:"Axel Rauschmayer",
        pages:460,
    },
    {
        title:"Programming JavaScript Applications",
        author:" Eric Elliott",
        pages:254,
    },
    {
        title:"Understanding ECMAScript 6",
        author:"Nicholas C. Zakas",
        pages:352,
    },
];
let book= {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254,
};

books.push(book);
console.log(books.length);
console.log(books);

let new_array=books.slice(2);
console.log(new_array);
books.shift();
console.log("The length is",books.length);
console.log(books);

let sum_all_books=books[0].pages+books[1].pages+books[2].pages;
console.log("The sum of all the pages of the books in the library is",sum_all_books);