function Grid(){

    let row = document.getElementsByTagName('input')[0].value
    let col = document.getElementsByTagName('input')[1].value

    const table = document.createElement("table");
    table.border = "1";
    table.style.borderCollapse = "collapse";
    table.style.marginTop = "20px";


  for (let i = 0; i < row; i++) {

  const row = document.createElement("tr");

  for (let j = 0; j < col; j++) {
    const cell = document.createElement("td");
    td.textContent = `(${i + 1}, ${j + 1})`;
    td.style.padding = "10px";
    td.style.textAlign = "center";
    tr.appendChild(td);
   }
     table.appendChild(tr);
  }
document.body.appendChild(table);
}