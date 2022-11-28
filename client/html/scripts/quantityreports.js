let app = document.getElementById("reports");
const baseUrl = "https://localhost:7258/api/books";

function reportsOnLoad() {
    let table = createQuantityTable()
    app.appendChild(table)
}

function createQuantityTable()
{
        const baseUrl = "https://localhost:7258/api/books";
        let table = document.createElement("table");
        table.id = "reports";
        table.border = "1";
        let tableBody = document.createElement("TBODY");
        tableBody.id = "QuantityTableBody";
        table.appendChild(tableBody);
      
        //create header row
        let tr = document.createElement("TR");
        tableBody.appendChild(tr);
      
        //header1
        let th1 = document.createElement("TH");
        th1.width = 325;
        th1.appendChild(document.createTextNode("TITLE"));
        tr.appendChild(th1);
      
        //header2
        let th2 = document.createElement("TH");
        th2.width = 325;
        th2.appendChild(document.createTextNode("QUANTITY SOLD"));
        tr.appendChild(th2);

        app.appendChild(table);

       return table;

}
function createBody(){
        var tr = document.createElement("TR");
        tableBody.appendChild(tr);
    
        var th1 = document.createElement("TH");
        th1.width = 325;
        th1.appendChild(document.createTextNode("ID"));
        tr.appendChild(th1);
        
        var th2 = document.createElement("TH");
        th2.width = 325;
        th2.appendChild(document.createTextNode("Book Name"));
        tr.appendChild(th2);
    
        var th3 = document.createElement("TH");
        th3.width = 325;
        th3.appendChild(document.createTextNode("Quantity Sold"));
        tr.appendChild(th3);
    
        var th4 = document.createElement("TH");
        th4.width = 325;
        th4.appendChild(document.createTextNode("Profit"));
        tr.appendChild(th4);
        
    }

    function conditionReportTable()
{
        const baseUrl = "https://localhost:7258/api/books";
        let table = document.createElement("table");
        table.id = "conditionreports";
        table.border = "1";
        let tableBody = document.createElement("TBODY");
        tableBody.id = "ConditionTableBody";
        table.appendChild(tableBody);
      
        //create header row
        let tr = document.createElement("TR");
        tableBody.appendChild(tr);
      
        //header1
        let th1 = document.createElement("TH");
        th1.width = 325;
        th1.appendChild(document.createTextNode("TITLE"));
        tr.appendChild(th1);
      
        //header2
        let th2 = document.createElement("TH");
        th2.width = 325;
        th2.appendChild(document.createTextNode("QUANTITY SOLD"));
        tr.appendChild(th2);

        app.appendChild(table);

       return table;

}
