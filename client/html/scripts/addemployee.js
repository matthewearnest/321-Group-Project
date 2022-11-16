const cwid = "12052267";
const baseUrl = "https://pa6-backend.herokuapp.com/api/books/"+cwid;
var employeeList = [];
var myEmployee = {};
const employeesURL = "https://localhost:7258/api/employee";

function populateList(){

    
    fetch(employeesURL).then(function(response){
        return response.json();
    }).then(function(json){
        employeeList = json;
        let html = "<select class = \"listBox\" onchange = \"handleOnChange()\" id= \"selectListBox\" name = \"list_box\" size=5 width=\"100%\">";
        json.forEach((employee)=>{
            html += "<option value = " + employee.id  + ">" + employee.username + "</option>";
        })
        html += "</select>";
        document.getElementById("listBox").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
    hideButtons();
}

function putBook(id){
    const putEmployeeApiUrl = employeesURL + "/"+id;
    const sendEmployee = {
        id: id,
        username: document.getElementById("empUsername").value,
        author: document.getElementById("empPassword").value,
        id: document.getElementById("empId").value,
        
    }
    fetch(putEmployeeApiUrl, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendEmployee)
    })
    .then((response)=>{
        myEmployee = sendEmployee;
        populateList();
        populateForm();
    });
}

function postBook(){
    
    const sendBook = {
        username: document.getElementById("empUsername").value,
        author: document.getElementById("empPassword").value,
        id: document.getElementById("empId").value,
        
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
        myEmployee = sendEmployee;
        populateList();
        blankFields();
    });
}

function deleteBook(){
    const deleteEmployeeApiUrl = employeesURL + "/" + myEmployee.id;
    fetch(deleteEmployeeApiUrl, {
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

function handleOnLoad(){
    populateList();
}


function handleOnChange(){
    const selectedId = document.getElementById("selectListBox").value;
    employeeList.forEach((employee)=>{
        if(employee.id == selectedId){
            console.log(selectedId)
            myEmployee = employee;
        }
    });

    populateForm();
}


function handleEditClick(){
    makeEditable();
    hideAllButtons();
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleEditSave("+myEmployee.id+")\">Save</button>"
    buttonHtml += "<button class=\"btn btn-warning btn-lg btn-cancle\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}


function handleNewClick(){
    makeEditable();
    hideAllButtons();
    blankFields();
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleNewSave()\">Save</button>"
    buttonHtml += "<button class=\"btn btn-warning btn-lg btn-cancle\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}








function handleDeleteClick(){
    deleteBook();
}


function handleCancelSave(){
    populateForm();
    makeReadOnly();
    showButtons();
}


function handleEditSave(id){
    putBook(id);
    makeReadOnly();
    showButtons();
    completeTransaction();
}


function handleNewSave(){
    postBook();
    makeReadOnly();
    showButtons();
    blankFields();
   
}


function completeTransaction()
{
    window.location.assign("file:///C:/Users/mearn/Source/Repos/Fall2022/321Group9Project/321-Group-Project/client/html/ordercompleted.html");
}







function populateForm(){
    document.getElementById("empUsername").value = myEmployee.username;
    document.getElementById("empPassword").value = myEmployee.password;
    document.getElementById("empID").value = myEmployee.id;
    //document.getElementById("bookLength").value = myBook.length;
    //document.getElementById("bookCover").value = myBook.cover;
    //var html = "<img class = \"coverArt\" src = \"" + myBook.cover + "\"></img>";
    //document.getElementById("picBox").innerHTML = html;
}


function hideButtons(){
    
    document.getElementById("deleteButton").style.display = "none";
    document.getElementById("rentButton").style.display = "none";
    document.getElementById("returnButton").style.display = "none";
}

function hideAllButtons(){
    
    document.getElementById("newButton").style.display = "none";
    document.getElementById("editButton").style.display = "none";
    document.getElementById("deleteButton").style.display = "none";
    document.getElementById("rentButton").style.display = "none";
    document.getElementById("returnButton").style.display = "none";
}


function showButtons(){
    document.getElementById("newButton").style.display = "inline-block";
    document.getElementById("editButton").style.display = "inline-block";
    document.getElementById("deleteButton").style.display = "inline-block";
    document.getElementById("rentButton").style.display = "inline-block";
    document.getElementById("returnButton").style.display = "inline-block";
    document.getElementById("saveButton").style.display = "none";
}


function makeEditable(){
    document.getElementById("empUsername").readOnly=false;
    document.getElementById("empPassword").readOnly=false;
    document.getElementById("empID").readOnly=false;
    //document.getElementById("numberCopies").readOnly=false;
   // document.getElementById("bookIsbn").readOnly=false;
   // document.getElementById("bookLength").readOnly=false;
   // document.getElementById("bookCover").readOnly=false;
}


function blankFields(){
    document.getElementById("empUsername").value="";
    document.getElementById("empPassword").value="";
    document.getElementById("empID").value="";
    //document.getElementById("numberCopies").value="";
    //document.getElementById("bookIsbn").value="";
    //document.getElementById("bookLength").value="";
    //document.getElementById("bookCover").value="";
}


function makeReadOnly(){
    document.getElementById("empUsername").readOnly=true;
    document.getElementById("empPassword").readOnly=true;
    document.getElementById("empID").readOnly=true;
    //document.getElementById("numberCopies").readOnly=true;
    //document.getElementById("bookIsbn").readOnly=true;
   // document.getElementById("bookLength").readOnly=true;
    //document.getElementById("bookCover").readOnly=true;
}