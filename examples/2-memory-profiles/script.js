let detachedNodes;

function create() {
  console.log("Creating dom nodes but not adding to DOM tree");

  let ul = document.createElement("ul");
  for (let i = 0; i < 10; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
  }
  detachedNodes = ul;
}

document.getElementById("create").addEventListener("click", create);
