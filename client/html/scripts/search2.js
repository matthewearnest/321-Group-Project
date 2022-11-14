const allBooksApiUrl = "https://localhost:7258/api/books";
const bookCardTemplate = document.getElementById('[data-book-template]')
const bookCardContainer = document.getElementById('[data-book-cards-container]')
const searchInput = document.querySelector("[data-search]")

let books = []

function searchOnLoad() {
    const app = document.getElementById("books");
    getBooks();
    renderBooks()
    
    // let search = searchBooks()
    // app.appendChild(search)
   
}




function renderBooks() {
    const allBooksApiUrl = "https://localhost:7258/api/books";
    fetch(allBooksApiUrl)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (json) {
        books = json.map(book => {
        const card = bookCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector('[data-header]')
        const body = card.querySelector('[data-body]')
        header.textContent = book.Title
        body.textContent = book.Author
        bookCardContainer.appendChild(card)     
        return {Title: book.Title, Author: book.Tuthor}
        
        })
    })
}

function getBooks() {
    const allBooksApiUrl = "https://localhost:7258/api/books";
    fetch(allBooksApiUrl)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (json) {
        let html = "<ul>";
        json.forEach((book) => {
          html += "<li>" + "ID" + book.Title + "</li>";
          html += "<li>" + "Name" + book.Author + "</li>";
          return {Title: book.Title, Author: book.Author}
        });
        html += "</ul>";
        document.getElementById("books").innerHTML - html;
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }



function searchBooks(){
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value
        books.forEach(book => {
            const isVisible = book.title.toLowerCase().includes(value) || book.author.toLowerCase().includes(value)
            book.element.classList.toggle("hide", !isVisible)
        })
    })
}

function variableHandling() {
    var price = 5;
    var copies = 1;
    var profit = 1;
    var total = 0;
    var tax = profit * .10;
    var taxtotal = price * tax;

    if(book.Condition === "likeNew") {
        price = 20.00;
    }
    else if(book.Condition === "good") {
        price = 15.00;
    }
    else if(book.Condition === "fair") {
        price = 10.00;
    }
    else if(book.Condition === "poor") {    
        price = 5.00;
    }
}