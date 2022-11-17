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

const onBookClick = (isn) => {
  console.log(isn)
}




