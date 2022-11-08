const app = document.getElementById("sales");

function salesOnLoad() {
    let table = createTable();
    app.appendChild(table);
}


function createTable() {
    let table = document.createElement("table");
    table.id = "DriverTable";
    table.border = "1";
    let tableBody = document.createElement("TBODY");
    tableBody.id = "DriverTableBody";
    table.appendChild(tableBody);
  
    //create header row
    let tr = document.createElement("TR");
    tableBody.appendChild(tr);
  
    //header1
    let th1 = document.createElement("TH");
    th1.width = 325;
    th1.appendChild(document.createTextNode("ID"));
    tr.appendChild(th1);
  
    //header2
    let th2 = document.createElement("TH");
    th2.width = 325;
    th2.appendChild(document.createTextNode("Book Name"));
    tr.appendChild(th2);
  
    //header3
    let th3 = document.createElement("TH");
    th3.width = 325;
    th3.appendChild(document.createTextNode("Quantity Sold"));
    tr.appendChild(th3);
  
    let th4 = document.createElement("TH");
    th4.width = 325;
    th4.appendChild(document.createTextNode("Profit"));
    tr.appendChild(th4);

    app.appendChild(table);

    return table;
}