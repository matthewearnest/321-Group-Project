let masterBookList = []
app = document.getElementById("books");


function getBooks() {
    const allBooksApiUrl = "https://localhost:7258/api/books";
    fetch(allBooksApiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.forEach((book) => {
          masterBookList.push(book);
        });
        console.log(masterBookList)
        updateResult("")
      });
  }

const updateResult = query => {
	let resultList = document.querySelector(".result");
	resultList.innerHTML = "";
  
  masterBookList.map(algo =>{
          console.log(algo.title)
		query.split(" ").map(word =>{
			if(algo.title.toLowerCase().indexOf(word.toLowerCase()) != -1){
				resultList.innerHTML += `<li id = "${algo.isn}"class="list-group-item" onclick = "onBookClick(this.id)">${algo.title}</li>`;
			}
		})
	})
}


let orderNumber = 1;
const onBookClick = (isn) => {
  
  orderNumber++;
  console.log(isn)
  localStorage.setItem("isn", isn);
  localStorage.setItem("title", masterBookList[isn-1].title);

  localStorage.setItem("author", masterBookList[isn-1].author);
 
  localStorage.setItem("price", masterBookList[isn-1].price);

  localStorage.setItem("condition", masterBookList[isn-1].condition);
  
  localStorage.setItem("numberCopies", masterBookList[isn-1].numberCopies);

  window.location.assign("file:///C:/Users/mearn/Source/Repos/Fall2022/321Group9Project/321-Group-Project/client/html/bookselected.html");
}

function testLocalStorage(){
  console.log(localStorage.getItem("isn"));
}


function populateForm()
{
  console.log(localStorage.getItem("isn"));
  console.log(localStorage.getItem("title"));
  console.log(localStorage.getItem("author"));
  console.log(localStorage.getItem("price"));
  console.log(localStorage.getItem("condition"));
  let isn = localStorage.getItem("isn")
  let title = localStorage.getItem("title")
  let author = localStorage.getItem("author")
  let price = getPrice();
  let condition = localStorage.getItem("condition")
  let numberCopies = localStorage.getItem("numberCopies")
    document.getElementById("bookIsbn").value = isn;
    document.getElementById("bookTitle").value = title;
    document.getElementById("bookAuthor").value = author;
    document.getElementById("bookPrice").value = price;
    document.getElementById("bookCondition").value = condition;
    document.getElementById("numberCopies").value = numberCopies;
}

function getPrice()
{
  let condition = localStorage.getItem("condition")
  if(condition = "Like New")
  {
    localStorage.setItem("price", "$15.00");
  }
  else if(condition = "Gently Used")
  {
    localStorage.setItem("price", "$10.00");
  }
  else if(condition = "Worn")
  {
    localStorage.setItem("price", "$5.00");
  }
  else
  {
    localStorage.setItem("price", "$0.00");
  }
  return localStorage.getItem("price");
}

function addToCart()
{
  localStorage.setItem("price", "$30.00");
  NoofItems = 1;
  onCartClick();
  alert("Item added to cart");
  window.location.assign("file:///C:/Users/mearn/Source/Repos/Fall2022/321Group9Project/321-Group-Project/client/html/checkout.html");

}

function onCartClick()
{
  NoofItems = NoofItems + 1;
}

function populateOrderForm()
{
 
    console.log(orderNumber);
    document.getElementById("orderNumber").value = orderNumber;
    document.getElementById("orderDate").value = getDate();
    document.getElementById("orderStatus").value = "In Progress";
    document.getElementById("NoofItems").value = 2;
    document.getElementById("orderTotal").value = localStorage.getItem("price");

}


function getDate(){
  var date = new Date();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  var dateString = month + "/" + day + "/" + year;
  return dateString;
}




//FILTERS BELOW
function filterResults(){
  const allBooksApiUrl = "https://localhost:7258/api/books";
  fetch(allBooksApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      json.forEach((book) => {
        masterBookList.push(book);
      });
      console.log(masterBookList)
      updateResult("")
    });

const updateResult = query => {
let resultList = document.querySelector(".result");
resultList.innerHTML = "";

masterBookList.map(algo =>{
        console.log(algo.title)
  query.split(" ").map(word =>{
    if(algo.title.toLowerCase().indexOf(word.toLowerCase()) != -1){
      resultList.innerHTML += `<li id = "${algo.isn}"class="list-group-item" onclick = "onBookClick(this.id)">${algo.title}</li>`;
    }
  })
})
}
}

function filterCondition(){
  const allBooksApiUrl = "https://localhost:7258/api/books";
  fetch(allBooksApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      json.forEach((book) => {
        masterBookList.push(book);
      });
      console.log(masterBookList)
      updateResult("")
    });

const updateResult = query => {
let resultList = document.querySelector(".result");
resultList.innerHTML = "";

masterBookList.map(algo =>{
        console.log(algo.condition)
  query.split(" ").map(word =>{
    if(algo.title.toLowerCase().indexOf(word.toLowerCase()) != -1){
      resultList.innerHTML += `<li id = "${algo.isn}"class="list-group-item" onclick = "onBookClick(this.id)">${algo.title} -- ${algo.condition}</li>`;
    }
  })
})
}
}

function filterAuthor(){
  const allBooksApiUrl = "https://localhost:7258/api/books";
  fetch(allBooksApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      json.forEach((book) => {
        masterBookList.push(book);
      });
      console.log(masterBookList)
      updateResult("")
    });

const updateResult = query => {
let resultList = document.querySelector(".result");
resultList.innerHTML = "";

masterBookList.map(algo =>{
        console.log(algo.author)
  query.split(" ").map(word =>{
    if(algo.title.toLowerCase().indexOf(word.toLowerCase()) != -1){
      resultList.innerHTML += `<li id = "${algo.isn}"class="list-group-item" onclick = "onBookClick(this.id)">${algo.title} -- ${algo.author}</li>`;
    }
  })
})
}
}

