// Question No1
const titleElement = document.getElementsByClassName("title")[0];
titleElement.style.backgroundColor = "green";
titleElement.style.color = "white";

// Question No2
const parghElement = document.getElementById("pargh");
parghElement.style.fontWeight = "bold";

parghElement.classList.add("parghraph")

// Question No3
const imgElement = document.getElementsByTagName("img")[0];
imgElement.src = "https://cdn-icons-png.flaticon.com/512/5968/5968292.png";

// Question No4
const ulElement = document.querySelector('ul');

const list = ["first item", "second item", "third item"]

list.forEach(liItem => {
    const listItems = document.createElement('li');
    listItems.textContent = liItem;
    ulElement.appendChild(listItems);

    listItems.style.color = "blue";
    listItems.style.border = "1px solid brown"
    listItems.style.listStyle = "none";

});

ulElement.style.display = "flex";
ulElement.style.justifyContent = "space-between";

// Qusetion No5
const tableElement = document.createElement('table');

// table.className = 'my-table'; 

const tbody = document.createElement('tbody');

for (let i = 0; i < 2; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 3; j++) {
        const col = document.createElement('td');
        col.textContent = "content"
        row.appendChild(col);
    }
    tbody.appendChild(row);
}

table.appendChild(tbody);

document.body.appendChild(table);

