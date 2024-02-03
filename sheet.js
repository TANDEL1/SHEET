let headRow = document.getElementById("head-row");
let headcell = document.getElementById("head-cell");
let body = document.getElementById("body");

let rows = 26;
let columns = 100;

for(let i=1; i<=rows; i++)
{
    let headcell = document.createElement("div");
    if(i>=1)
    {
        headcell.innerText = String.fromCharCode(i + 64);
        headcell.className = "head-cell";
    }
    headRow.append(headcell);
}

for(let i=0; i<=columns; i++)
{
    let colcell = document.createElement("div");
    if(i>=1)
    {
        colcell.innerText = i;
        colcell.className = "sno-cell";
    }
    headcell.append(colcell);
}

for (let i=1; i<=columns; i++)
{
    let row = document.createElement("div");
    row.className = "row";
    for(let j=1; j<=rows; j++)
    {
        let cel = document.createElement("div");
        cel.className = "cel";
        cel.contentEditable = true;
        cel.id = `${String.fromCharCode(j+64)}${i}`;
        cel.addEventListener("focus", onfocuscell);
        row.append(cel);
    }
    body.append(row);
}


