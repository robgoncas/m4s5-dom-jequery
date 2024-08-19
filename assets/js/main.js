// Obtener referencia a la tabla y el total
const tablaProductos = $('#tablaProductos tbody');
const totalElement = $('#total');
let total = 0;

//html() : element.innerHTML
//after() luego : document.write() 


$('.container').after('<button id="cambiarDisposicion" class="btn btn-danger ml-3 mt-3">Cambiar Disposición</button>');

// Manejar clic en el botón "Agregar Producto"
$('#agregarProducto').click(() => {
    // Obtener producto seleccionado
    const productoSeleccionado = $('#producto option:selected');
    const producto = productoSeleccionado.text();
    const precio = Number(productoSeleccionado.data('precio'));

    // Agregar fila con producto y precio a la tabla
    const fila = `
        <tr>
            <td>${producto}</td><td>${precio}</td>
        </tr>
    `;
    //append va a agregar un elemento dentro de otro elemento
    tablaProductos.append(fila);

    // Actualizar el total
    total += precio;
    totalElement.text(total);
});

// Cambiar la clase de la tabla a una versión compacta
$('#formProducto').after('<button id="compactarTabla" class="btn btn-secondary mt-3">Compactar Tabla</button>');

$('#compactarTabla').click(() => {
    tablaProductos.closest('table').toggleClass('table-sm');
});


$('#cambiarDisposicion').click(() => {
    // Seleccionar todos los elementos con la clase 'col-6'
    $('.col').each(function () {
        // Alternar entre 'col-6' y 'col-12'
        $(this).toggleClass('col-12 col-6');
    });
});
