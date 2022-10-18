const boton = document.getElementById ("open");
const registro = document.getElementById ("registro");
const close = document.getElementById ("close");

open.addEventListener("click", () => {
    modal_container.classList.add("show");
    aler ("prueba");
});

open.addEventListener("click", () => {
    modal_container.classList.remove("show");

});
