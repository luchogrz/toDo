const agregarTarea = () => {

    //Obtenemos el valor de campo de la tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;


    //Validamos que no este vacio
    if (nuevaTareaTexto === "" ) {
        alert ("No puede estar vacio")
       return 
    } 


    //Crear elemento en la lista

    let nuevaTarea = document.createElement("li");

    //asignarle el valor a la lista recien creada

    nuevaTarea.textContent = nuevaTareaTexto + " ";

    //boton crear ELIMINAR

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar"; 
    botonEliminar.onclick = function () {
        nuevaTarea.remove();

    }

    //AGregar el boton de eliminar al elemento de la lista
    nuevaTarea.appendChild (botonEliminar)

    //agregar el elemento  / la tarea a la lista

    document.getElementById("listaTareas").appendChild(nuevaTarea)

    //limpiar el cuadro de texto del nombre de la tarea

    document.getElementById("nuevaTarea").value = " "

}
