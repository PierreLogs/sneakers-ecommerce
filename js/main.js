//Variables
let img = document.getElementById('main-product-image');
const increaseBtn = document.getElementById('increase-quantity');
const decreaseBtn = document.getElementById('decrease-quantity');
const addCartBtn = document.getElementById('add-to-cart');

//Miniaturas
function showData(num){
    img.src=`./assets/images/image-product-${num}.jpg`;
}

//Producto
const producto = {
    id:1,
    nombre:'Fall Limited Edition Sneakers',
    precio:125.00,
    stock:10,
    cantidad: 0
}

//Carrito de compra


//Agregar al carrito
let carrito = [];

//Incrementar
//increase-quantity
increaseBtn.addEventListener("click", function(){
    if(producto.cantidad < 10){
        producto.cantidad++;
    }
    document.getElementById('product-quantity').textContent = producto.cantidad;

})

//decrease-quantity
decreaseBtn.addEventListener("click", function(){
    if(producto.cantidad > 0){
        producto.cantidad--;
    }
    document.getElementById('product-quantity').textContent = producto.cantidad;

})

addCartBtn.addEventListener("click", function(){
    if(producto.cantidad === 0){
        return;
    }

    //carrito.push(producto);
    const existe = carrito.find(item => item.id === producto.id);

    if (existe){
        if(existe.cantidad + producto.cantidad > producto.stock){
            return;
        }
        existe.cantidad += producto.cantidad;
    }else{
        carrito.push({
            ...producto
        });
    }

    //console.log(carrito[0].cantidad);
    console.log(carrito);
})

