const cwid = "12052267";
const baseUrl = "https://pa6-backend.herokuapp.com/api/books/"+cwid;
var bookList = [];
var myBook = {};
const booksURL = "https://localhost:7258/api/books";

function populateList(){

    
    fetch(booksURL).then(function(response){
        return response.json();
    }).then(function(json){
        bookList = json;
        let html = "<select class = \"listBox\" onchange = \"handleOnChange()\" id= \"selectListBox\" name = \"list_box\" size=5 width=\"100%\">";
        json.forEach((book)=>{
            html += "<option value = " + book.isn  + ">" + book.title + "</option>";
        })
        html += "</select>";
        document.getElementById("listBox").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}

function putBook(isn){
    const putBookApiUrl = booksURL + "/"+isn;
    const sendBook = {
        isn: isn,
        title: document.getElementById("bookTitle").value,
        author: document.getElementById("bookAuthor").value,
        genre: document.getElementById("bookCondition").value,
        numberCopies: parseInt(document.getElementById("numberCopies").value),
        isbn: document.getElementById("bookIsbn").value,
        //length: parseInt(document.getElementById("bookLength").value),
        //cover: document.getElementById("bookCover").value
    }
    fetch(putBookApiUrl, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendBook)
    })
    .then((response)=>{
        myBook = sendBook;
        populateList();
        populateForm();
    });
}

function postBook(){
    
    const sendBook = {
        title: document.getElementById("bookTitle").value,
        author: document.getElementById("bookAuthor").value,
        condition: document.getElementById("bookGenre").value,
        numberCopies: parseInt(document.getElementById("numberCopies").value),
        isn: document.getElementById("bookIsbn").value,
        //length: parseInt(document.getElementById("bookLength").value),
        //cover: document.getElementById("bookCover").value
    }
    fetch(booksURL, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendBook)
    })
    .then((response)=>{
        console.log(response);
        myBook = sendBook;
        populateList();
        blankFields();
    });
}

function deleteBook(){
    const deleteBookApiUrl = booksURL + "/" + myBook.isbn;
    fetch(deleteBookApiUrl, {
        method: "DELETE",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        }
    })
    .then((response)=>{
        blankFields();
        populateList();
    });
}
