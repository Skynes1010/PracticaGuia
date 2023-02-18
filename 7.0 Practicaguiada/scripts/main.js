import { validateString, vAvg, checkAvg } from "./validate.js";
import {paintCard, addStudent, modalAlert} from "./paint.js";

let currentType = {name: ""}
const select = document.getElementById('opcion');
const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');

/*
Genrar eventos

1.Colocando el metodo(evento=) en el a onclick, onmuseover, onmuseout de la etiquera

2.Propiedad 

*/

select.addEventListener('change', (e)=>{
    const op = e.target.value
    const avg = document.getElementById('promedio');
    const profesion = document.getElementById('profesion');
    const labelPromedio = document.getElementById('labelPromedio');
    const labelProfesion = document.getElementById('labelProfesion');
    if(op === "estudiante"){
        avg.style.display = "inline-block";
        labelPromedio.style.display ="inline-block";
        profesion.style.display = "none";
        labelProfesion.style.display ="none";
    }else{
        avg.style.display = "none";
        labelPromedio.style.display ="none";
        profesion.style.display = "inline-block";
        labelProfesion.style.display ="inline-block";
    }
    //console.log("entro"+e.target.value)
});

btnAgregar.onclick = function(){
    //console.log('evento propiedad');
    
    const name = document.getElementById('nombre').value;
    const lastname = document.getElementById('apellido').value;
    const avg = document.getElementById('promedio').value;  //obtiene valor
    const op = document.getElementById('opcion').value;
    currentType["name"] = op;
    const profesion = document.getElementById('profesion').value;
    

    if(validateString(name) && validateString(lastname)&& op !=0){
        if(op==="estudiante"){
            if((!isNaN(avg))&&(vAvg(avg))){
                addStudent(name, lastname, avg);
    
            }else{
            document.querySelector('#promedio').value="";
            modalAlert("Promedio invalido");
        }

        }else{
            if(validateString(name) && validateString(lastname)&& op !=0){
                addProfessor(name, lastname, profesion);
            }else{
                modalAlert("Datos invalidos");
        }    
    }
}else{
    modalAlert("Datos invalidos");
    }
    form.reset();
} 

btnMostrar.addEventListener("click", function(){
    paintCard(currentType.name);
});

