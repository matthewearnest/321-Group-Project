let app = document.getElementById("totalreport");
const baseUrl = "https://localhost:7258/api/books";

function totalReportOnLoad() {
    let table = createtotalTable()
    app.appendChild(table)
}

function createtotalTable()
{
        const baseUrl = "https://localhost:7258/api/books";
        let table = document.createElement("table");
        table.id = "totalreport";
        table.border = "1";
        let tableBody = document.createElement("TBODY");
        tableBody.id = "totalTableBody";
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
        th2.appendChild(document.createTextNode("TOTALS"));
        tr.appendChild(th2);

        app.appendChild(table);

       return table;

}