const books = [{
    author:"James Clear and Penguin Audio",
    coverImageURL:"https://m.media-amazon.com/images/I/81iss3ldpLL._AC_UY436_QL65_.jpg",
    price: "468",
    title:"Atomic Habits"
},
{
    title: "Ikigai",
    author: "Francesc García, Héctor,Miralles",
    price: "364",
    coverImageURL: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY436_QL65_.jpg"
},
{
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: "290",
    coverImageURL: "https://m.media-amazon.com/images/I/71XEsXS5RlL._AC_UY436_QL65_.jpg"
},
{
    title: "Don't Believe Everything You Think",
    author: "Joseph Nguyen",
    price: "204",
    coverImageURL: "https://m.media-amazon.com/images/I/715qi-cIbML._AC_UY436_QL65_.jpg"
},
{
    title: "Hard Struck, A Graphic Novel",
    author: "Codey Anderson",
    price: "894",
    coverImageURL: "https://m.media-amazon.com/images/I/712zjjq67bL._AC_UY436_QL65_.jpg"
}
];

fetch("https://mini-41fa2-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json", {
    method: "POST", body: JSON.stringify(books)
})
    .then(res => res.json())
    .then((data) => {
        console.log("data posted", data)
    })
    .catch((err) => {
        console.log("error", err);
    });

document.getElementById("btn").addEventListener("click",function card(){
    const TODOS_ID = "-Ofy33eADBePN-BCr9B3";
    const DB_URL = `https://mini-41fa2-default-rtdb.asia-southeast1.firebasedatabase.app/todos/${TODOS_ID}.json`;

function fetchBooks() {
  fetch(DB_URL)
    .then(res => res.json())
    .then(booksArray => {
      console.log("Books for this ID:", booksArray);
      renderBooks(booksArray);
    })
    .catch(err => {
      console.error("Error fetching books:", err);
    });
}

function renderBooks(books) {
  const container = document.getElementById("booksContainer");
  container.innerHTML = "";

  books.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
      <img src="${book.coverImageURL}" alt="${book.title}" />
      <div class="book-title">${book.title}</div>
      <div class="book-author">${book.author}</div>
      <div class="book-price">₹${book.price}</div>
    `;

    container.appendChild(card);
  });
}

fetchBooks();


})

