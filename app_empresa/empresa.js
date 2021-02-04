class Empresa {
    constructor(id,nombre,empleados) {
    this.id = id
    this.nombre = nombre
    this.empleados = empleados
    }

}

const programador = document.getElementById("programador");
const diseniador = document.getElementById("diseniador");
const programador_checkbox = document.getElementById("programador_checkbox");
const diseniador_checkbox = document.getElementById("diseniador_checkbox");
const inputBuscarEmpleado = document.getElementById("buscarEmpleado");
const listaEmpleados = document.getElementById("empleado-list");

const arrayEmpleados = [];

// Metodo de Agregar Empleados

function agregarEmpleado(e) {
    e.preventDefault();
    handleForm();
}

function handleForm() {
    const id = arrayEmpleados.length + 1; // le sumo de a un empleado a la arrays
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const lenguaje = document.getElementById("lenguaje").value;
    const disenia = document.getElementById("disenia").value;

    let empleado;

    programador_checkbox.checked === true
    ? empleado = new Programador(id, nombre, apellido, edad, lenguaje)
    : empleado = new Diseniador(id, nombre, apellido, edad, disenia);

    arrayEmpleados.push(empleado);
    promedioEdad(empleado);
    
    listarEmpleado(empleado);
    resetForm();
}

// Reseteo el Formulario luego de Cargar el Empleado

function resetForm() {
    document.getElementById('empleado-form').reset();
} 



function handleCheckbox(e) {
    e.preventDefault();
    programador_checkbox.checked === false ? programador.style.display = "none" : programador.style.display = "block";
    diseniador_checkbox.checked === false ? diseniador.style.display = "none" : diseniador.style.display = "block";

}


function listarEmpleado(empleado) {
    const empleadoList = document.getElementById('empleado-list');
    const element = document.createElement('div');
    element.classList.add("card", "text-center", "mb-4")
    element.id = empleado.id;

    element.innerHTML += `<div class ="card-body">
                                <strong>Id</strong>: ${empleado.id}
                                <strong>Nombre</strong>: ${empleado.nombre}
                                <strong>Apellido</strong>: ${empleado.apellido}
                                <strong>Edad</strong>: ${empleado.edad}

                                ${ empleado.lenguaje === undefined
                                ? `<strong>Diseña en</strong>: ${empleado.diseniador}`
                                : `<strong>Programa en</strong>: ${empleado.lenguaje}` }
                            </div>`;

      empleadoList.appendChild(element);
}

// Buscar Empleado por ID:

function buscarEmpleado() {

    for(let i = 0; i < listaEmpleados.children.length; i++){
        if( parseInt(inputBuscarEmpleado.value) === parseInt(listaEmpleados.children[i].id)){
            listaEmpleados.children[i].style.display = "block";
        }else{
            listaEmpleados.children[i].style.display = "none";
        }
    }

}

// Calcula el Promedio de los empleados:

function promedioEdad(empleado) {
    const promedio = document.getElementById("promedio");

    let sum = 0;

    arrayEmpleados.forEach(empleado => {
        sum += parseInt(empleado.edad);
    })
    
    sum = sum / arrayEmpleados.length;

    promedio.innerHTML = sum;

}
