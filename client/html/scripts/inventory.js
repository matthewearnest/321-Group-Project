const booksURL = "https://localhost:7258/api/books";
function populateList(){

    
    fetch(booksURL).then(function(response){
        return response.json();
    }).then(function(json){
        bookList = json;
        let html = "<select class = \"listBox\ onchange = \"handleOnChange()\" id= \"selectListBox\" name = \"list_box\" size=12 width=\"100%\onlick = go()\">";
        json.forEach((book)=>{
            html += "<option value = " + book.isn  + ">" + book.title + "</option>";
        })
        html += "</select>";
        document.getElementById("listBox").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}

function go()
{
    window.location.assign("file:///C:/Users/mearn/Source/Repos/Fall2022/321Group9Project/321-Group-Project/client/html/tradein.html");
}

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
				resultList.innerHTML += `<li id = "${algo.isn}" style = "text-align: center;" class="list-group-item" onclick = "onBookClick(this.id)">Title: ${algo.title} -----------------Genre: ${algo.condition}---------------- Number of Copies: ${algo.numberCopies}</li>`;
			}
		})
	})
}