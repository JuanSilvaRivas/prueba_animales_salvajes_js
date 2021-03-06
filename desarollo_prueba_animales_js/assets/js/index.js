//importando desde animal.js
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/animal.js";

//declaramos las constantes
const leon = new Leon();
const lobo = new Lobo();
const oso = new Oso();
const serpiente = new Serpiente();
const aguila = new Aguila();

//creamos las instancias
let animalesObjeto = {};
let animalesArrayCards = [];

(async () => {
  try {
    const res = await fetch("animales.json");
    const { animales } = await res.json();
    animales.forEach((item) => {
      animalesObjeto[item.name] = item;
    });
    console.log(animalesObjeto);
  } catch (error) {
    console.log(error);
  }
})();

//obtenemos los datos del html utilizando  los id
const formulario = document.getElementById("formulario");
const animales = document.getElementById("animales");
const animal = document.getElementById("animal");
const edad = document.getElementById("edad");
const comentarios = document.getElementById("comentarios");
const preview = document.getElementById("preview");


//creamos el evento de escuchar
animal.addEventListener("change", (e) => {
  preview.innerHTML = `<img src="./assets/imgs/${animalesObjeto[e.target.value].imagen}" alt="" class="img-fluid">`;
});


//pintamos los arreglos de los animales
const pintarAnimales = () => {
    animales.innerHTML = "";
    animalesArrayCards.forEach((item) => {
        console.log("img")        
        console.log(item)
        animales.innerHTML += `
        <article class="card">
            <img src="../assets/imgs/${item.img}" alt="" class="card-img-top" style="height :150px">
            <div class="card-body">
              <h5>${item.nombre}</h5>
              <p>${item.edad}</p>
              <p>${item.comentarios}</p>
            </div>
          </article>
        `;
    });
    

    //obtenemos los valores seleccionados por el usuario
    document.getElementById('animal').value = ''
    document.getElementById('edad').value = ''
    document.getElementById('comentarios').value = ''
};

// creamos el formulario del evento submit
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  //hacemos las validaciones correspondientes
  if (animal.value === "Leon") {
    const leon = new Leon(
        animal.value, 
        edad.value, 
        comentarios.value, 
        animalesObjeto[animal.value].imagen
    );

    animalesArrayCards.push(leon)
  }

  if (animal.value === "Lobo") {
    const lobo = new Lobo(
        animal.value, 
        edad.value, 
        comentarios.value, 
        animalesObjeto[animal.value].imagen
    );

    animalesArrayCards.push(lobo)
  }

  if (animal.value === "Oso") {
    const oso = new Oso(
        animal.value, 
        edad.value, 
        comentarios.value, 
        animalesObjeto[animal.value].imagen
    );

    animalesArrayCards.push(oso)
  }

  if (animal.value === "Serpiente") {
    const serpiente = new Serpiente(
        animal.value, 
        edad.value, 
        comentarios.value, 
        animalesObjeto[animal.value].imagen
    );

    animalesArrayCards.push(serpiente)
  }

  if (animal.value === "Aguila") {
    const aguila = new Aguila(
        animal.value, 
        edad.value, 
        comentarios.value, 
        animalesObjeto[animal.value].imagen
    );
    
  animalesArrayCards.push(aguila)
  }

  //invocamos la funcion
  pintarAnimales();
});


