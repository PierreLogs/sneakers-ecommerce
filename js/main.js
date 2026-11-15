"use strict";


//1. Seleccion de elementos del DOM

const mainProductImage = document.querySelector("#main-product-image");
const thumbnails = document.querySelectorAll(".thumbnail");

//2. Eventos de las miniaturas

//Recorre los elementos uno por uno
thumbnails.forEach(thumbnail => {
    //Se ejecutará 4 veces porque tenemos 4 miniaturas
    thumbnail.addEventListener("click", () =>{
        //Al hacer click se ejecutará la instrucción
        const imageNumber = thumbnail.dataset.image;
        mainProductImage.setAttribute(
            "src",
            `./assets/images/image-product-${imageNumber}.jpg`
            /*Si se selecciona la etiqueta <button class="thumbnail" data-image="2">
            * se obtendrá el siguiente string: "2" ya que estamos modificando el atributo src de la imagen
            */
        );

        thumbnails.forEach(otherThumbnail => {
            otherThumbnail.classList.remove("thumbnail--active");
            otherThumbnail.setAttribute("aria-pressed","false");
        })
        thumbnail.classList.add("thumbnail--active");
        thumbnail.setAttribute("aria-pressed","true");
    });
})

