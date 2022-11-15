// // JavaScript code
// const url = "https://localhost:7258/api/books";
// function searchOnLoad() {
//     document.getElementById('searchbar').addEventListener('keyup', search_book);
// }


// const allBooksApiUrl = "https://localhost:7258/api/books";
// // const bookCardTemplate = document.getElementById("data-book-template");
// // const bookCardContainer = document.getElementById("data-book-cards-container");
// // const searchInput = document.querySelector("[data-search]");
// const bookContainer = document.getElementById("books");

// let masterBookList = [];

// function searchOnLoad() {
//   const app = document.getElementById("books");

//   renderBooks();

//   searchBooks();
// }

// function getBooks() {
//   const allBooksApiUrl = "https://localhost:7258/api/books";
//   fetch(allBooksApiUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (json) {
//       json.forEach((book) => {
//         masterBookList.push(book);
//       });
//       renderBookCards();
//     });
// }
// const renderBookCards = () => {
//   console.log(masterBookList);
//   let html = "";
//   masterBookList.forEach((bookData) => {
//     html = `
//       <a href="#${bookData.Id}" style="color: 'black', ">
//       <div class="card" style="width: 18rem;">
//       <div class="card-body">
//         <h5 class="card-title">${bookData.title}</h5>
//         <p class="card-text">${bookData.author}</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//       `;
//   });
//   bookContainer.innerHTML = html;
// };

// function searchBooks() {
//   searchInput.addEventListener("input", (e) => {
//     const value = e.target.value;
//     books.forEach((book) => {
//       const isVisible =
//         book.title.toLowerCase().includes(value) ||
//         book.author.toLowerCase().includes(value);
//       book.element.classList.toggle("hide", !isVisible);
//     });
//   });
// }

// function variableHandling() {
//   var price = 5;
//   var copies = 1;
//   var profit = 1;
//   var total = 0;
//   var tax = profit * 0.1;
//   var taxtotal = price * tax;

//   if (book.Condition === "likeNew") {
//     price = 20.0;
//   } else if (book.Condition === "good") {
//     price = 15.0;
//   } else if (book.Condition === "fair") {
//     price = 10.0;
//   } else if (book.Condition === "poor") {
//     price = 5.0;
//   }
// }


