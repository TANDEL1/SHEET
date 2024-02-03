let cellnaming = document.getElementById("selectdecell");
let form = document.getElementById("options-form");
let expression = document.getElementById("expression");

let selectedcell = null;
let state = {};

let defaultstate =
{
    innerText: "",
    isbold: false,
    aligntext: "left",
    isunderline: false,
    isitalic: false,
    fontsize: "14",
    fontfamily: "Times New Roman",
    fontcolor: "#000000",
    backgroundcolor: "ffffff"
}

function applycellinfotoform() {
    if (state[selectedcell.id]) {
        let data = state[selectedcell.id];
        for (let key in data) {
            if (form[key].type === "checkbox")
            {
                form[key].checked = data[key];
            }
            else
            form[key].value = data[key];
    }
}
else {
    form.reset();
}
}


function onfocuscell(e) {
    if (selectedcell) {
        selectedcell.classList.remove("active-cell");
    }
    selectedcell = e.target;
    cellnaming.innerText = selectedcell.id;
    selectedcell.classList.add("active-cell");
    applycellinfotoform();
};

function applystyletoselectedcell(styles) {
    selectedcell.style.fontSize = styles.fontsize + "px";
    selectedcell.style.fontFamily = styles.fontFamily;
    selectedcell.style.fontWeight = styles.isbold ? "bold" : "300";
    selectedcell.style.fontStyle = styles.isitalic ? "italic" : "normal";
    selectedcell.style.textDecoration = styles.isunderline ? "underline" : "none";
    selectedcell.style.textAlign = styles.aligntext;
    selectedcell.style.color = styles.fontcolor;
    selectedcell.style.backgroundColor = styles.backgroundcolor;
}

form.addEventListener("change", function () {
    if (!selectedcell) {
        alert("You have not selected any cell !!!");
        form.reset();
        return;
    }

    let formdata =
    {
        fontfamily: form["fontfamily"].value,
        fontsize: form["fontsize"].value,
        isbold: form["bold"].checked,
        isitalic: form["italic"].checked,
        isunderline: form["underlined"].checked,
        aligntext: form["align"].value,
        fontcolor: form["fontcolour"].value,
        backgroundcolor: form["backgroundcolour"].value
    }
    state[selectedcell.id] = { ...formdata, innerText: selectedcell.innerText };
    applystyletoselectedcell(formdata);
});



expression.addEventListener("keyup", (e) => {
    if (e.code === "Enter" || "NumpadEnter" && selectedcell) {
        try {
            let problem = expression.value;
            let result = eval(problem);
            selectedcell.innerText = result;
        }
        catch (error) {
            alert("Please enter a valid expression")
        }
    }
})
