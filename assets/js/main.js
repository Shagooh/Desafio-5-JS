const tareaInput = document.querySelector('#nuevaTarea') // input
const btnTarea = document.querySelector('#agregarTarea') // boton
const tbody = document.querySelector('tbody') // tabla body
const realizarTarea = document.querySelector('#realizado')
const borrarTarea = document.querySelector('#borrar')
const verTotal = document.querySelector('#mostrarTotal')
const verRealizadas = document.querySelector('#mostrarRealizados')
const tareas = [
    { id: 1, descripcion: "Lavar", realizada: false },
    { id: 2, descripcion: "Secar", realizada: false },
    { id: 3, descripcion: "Tender", realizada: false },
    { id: 4, descripcion: "Limpiar", realizada: false }
]



btnTarea.addEventListener("click", () => {

    const nuevaTarea = tareaInput.value
    tareas.push({ id: tareas.length+1, descripcion: nuevaTarea })
    tareaInput.value = ''
    renderizar(tareas)
})

function renderizar(tareas) {

    tbody.innerHTML = ''
    tareas.forEach((tarea) => {
        tbody.innerHTML += `
        <tr>
            <td>${tarea.id}</td>
            <td>${tarea.descripcion}</td>
            <td> <input id="realizado" type="checkbox"> </td>
            <td> <button onclick="borrar(${tarea.id})"> <img src="./assets/imgs/eliminar.jpeg" height="10" width="10" /></button>
            </td>
            </tr>`
    })
    verRealizadas.textContent = `${tareas.length}`
    verTotal.textContent = `${tareas.length}`
        ;
}
renderizar(tareas);

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    renderizar(tareas);
}