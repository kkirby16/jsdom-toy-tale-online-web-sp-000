let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  getToys();
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function getToys() { 
  let configObject = { 
    method: "GET",
    headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
};

return fetch("http://localhost:3000/toys", configObject)
    .then(function(response) { 
        return response.json(); 
    })
    .then(function(object) {
        object.forEach(element => { 
          let div = document.createElement("div");
          div.className = "card";
          let h2 = document.createElement("h2");
          h2.innerText = element.name; 
          let imageElement = document.createElement("img");
          imageElement.src = element.image; 
          imageElement.className = "toy-avatar"
          let p = document.createElement("p");
          p.innerText = element.likes;
          let button = document.createElement("button");
          button.className = "like-btn";
          button.innerText = "Like <3" 
          let collectionDiv = document.getElementById("toy-collection");
          div.appendChild(h2);
          div.appendChild(imageElement);
          div.appendChild(p);
          div.appendChild(button);
          collectionDiv.appendChild(div);
        })
    })
  
}
