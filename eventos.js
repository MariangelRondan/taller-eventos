let div = document.querySelector("#div");

div.addEventListener("click", () => {alert("Hola! Soy el div.")})


let boton = document.querySelector("button");

boton.addEventListener("click", (event) => {
    event.stopPropagation();
    alert('Hola!')
   
})