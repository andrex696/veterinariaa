// PRODUCTOS
const productos = [
    // Perros
    {
        id: "perro-01",
        titulo: "Dog Chow",
        imagen: "../img/perros1.jpg",
        categoria: {
            nombre: "Perros",
            id: "perros"
        },
        precio: 70000
    },
    {
        id: "perro-02",
        titulo: "Chunky",
        imagen: "../img/perros2.jpg",
        categoria: {
            nombre: "Perros",
            id: "perros"
        },
        precio: 70000
    },
    {
        id: "perro-03",
        titulo: "Dog Chow extra",
        imagen: "../img/perros3.webp",
        categoria: {
            nombre: "Perros",
            id: "perros"
        },
        precio: 65000
    },
    {
        id: "perro-04",
        titulo: "Rocku",
        imagen: "../img/perros4.webp",
        categoria: {
            nombre: "Perros",
            id: "perros"
        },
        precio: 75000
    },
    {
        id: "perro-05",
        titulo: "Magic Friends",
        imagen: "../img/perros5.png",
        categoria: {
            nombre: "Perros",
            id: "perros"
        },
        precio: 70000
    },
    // Gatos
    {
        id: "gato-01",
        titulo: "ProPlan extra",
        imagen: "../img/gatos1.jpg",
        categoria: {
            nombre: "Gatos",
            id: "gatos"
        },
        precio: 45000
    },
    {
        id: "gato-02",
        titulo: "CatCHOW",
        imagen: "../img/gatos2.jpg",
        categoria: {
            nombre: "Gatos",
            id: "gatos"
        },
        precio: 40000
    },
    {
        id: "gato-03",
        titulo: "Whiskas",
        imagen: "../img/gatos3.jpg",
        categoria: {
            nombre: "Gatos",
            id: "gatos"
        },
        precio: 35000
    },
    {
        id: "gato-04",
        titulo: "Dali Pescado",
        imagen: "../img/gatos4.jpg",
        categoria: {
            nombre: "Gatos",
            id: "gatos"
        },
        precio: 37000
    },
    {
        id: "gato-05",
        titulo: "Equilibrio",
        imagen: "../img/gatos5.jpg",
        categoria: {
            nombre: "Gatos",
            id: "gatos"
        },
        precio: 40000
    },
    {
        id: "gato-06",
        titulo: "Minino",
        imagen: "../img/gatos6.jpg",
        categoria: {
            nombre: "Gatos",
            id: "gatos"
        },
        precio: 50000
    },
    {
        id: "gato-07",
        titulo: "Nomade Exclusive",
        imagen: "../img/gatos7.png",
        categoria: {
            nombre: "Gatos",
            id: "gatos"
        },
        precio: 45000
    },
    {
        id: "gato-08",
        titulo: "MaxCat",
        imagen: "../img/gatos8.jpg",
        categoria: {
            nombre: "Gatos",
            id: "gatos"
        },
        precio: 45000
    },
    // Otros
    {
        id: "otro-01",
        titulo: "Champion Conejos",
        imagen: "../img/conejo1.jpg",
        categoria: {
            nombre: "Otros",
            id: "otros"
        },
        precio: 45000
    },
    {
        id: "otro-02",
        titulo: "Alpo",
        imagen: "../img/crias1.webp",
        categoria: {
            nombre: "Otros",
            id: "otros"
        },
        precio: 50000
    },
    {
        id: "otro-03",
        titulo: "Vivir",
        imagen: "../img/aves1.jpg",
        categoria: {
            nombre: "Otros",
            id: "otros"
        },
        precio: 40000
    },
    {
        id: "otro-04",
        titulo: "GoldFish",
        imagen: "../img/peces1.webp",
        categoria: {
            nombre: "Otros",
            id: "otros"
        },
        precio: 38000
    },
    {
        id: "otro-05",
        titulo: "Hagen Tropican",
        imagen: "../img/crias2.jpg",
        categoria: {
            nombre: "Otros",
            id: "otros"
        },
        precio: 45000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

