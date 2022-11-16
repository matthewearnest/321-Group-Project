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