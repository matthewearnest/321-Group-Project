let app = document.getElementById("subtotalreport");
const baseUrl = "https://localhost:7258/api/books";

function subtotalReportOnLoad() {
    let table = createSubtotalTable()
    app.appendChild(table)
}

function createSubtotalTable()
{
        const baseUrl = "https://localhost:7258/api/books";
        let table = document.createElement("table");
        table.id = "subtotalreport";
        table.border = "1";
        let tableBody = document.createElement("TBODY");
        tableBody.id = "subtotalTableBody";
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
        th2.appendChild(document.createTextNode("SUBTOTALS"));
        tr.appendChild(th2);

        app.appendChild(table);

       return table;

}