
const texto = document.getElementById('pregunta');

const divAlertas = document.getElementById('alertas');

const terminar = document.getElementById('terminar');
const aFavor = document.getElementById('fav');
const contra = document.getElementById('contra');
const absten = document.getElementById('abs');

const regla = /^[a-zA-ZÁ-ÿ0-9\s¿?]{5,200}$/;

const pregunta = new Pregunta();



function eventos(){
    document.getElementById('save').addEventListener('click',enviar);
    aFavor.addEventListener('click', favor1);
    contra.addEventListener('click', contra1);
    absten.addEventListener('click', asbtencion1);
    terminar.addEventListener('click', imprimir);

}

eventos();

function enviar() {
    divAlertas.innerHTML='';
    if(texto.value != '' && regla.test(texto.value)){
        pregunta.textoPregunta = texto.value;
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Pregunta guardada',
            showConfirmButton: false,
            timer: 1000
          })
    }
    else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Escriba correctamente la pregunta',
            showConfirmButton: false,
            timer: 1000
          })
    }
}

function favor1() {
    if(texto.value!=''){
        pregunta.masFavor();
    }
}

function contra1() {
    if(texto.value!=''){
        pregunta.masContra();
    }
}

function asbtencion1() {
    if(texto.value!=''){
        pregunta.masAbstencion();
    }
}

function imprimir() {

    let resp = pregunta.datos;

    divAlertas.appendChild(resp);

}

