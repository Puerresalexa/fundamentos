const form=document.getElementById('registrate')
const KEY="registrate"

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const registrato={

    name:document.getElementById('name').value.trim(),
    correo:document.getElementById('correo').value.trim(),
    contraseña:document.getElementById('contraseña').value.trim(),
    }

    //leer envios previos
    const lista=JSON.parse(localStorage.getItem(KEY)) || [];

    //agregar al nuevo

    lista.push(registrato);

    //guardar de nuevo en local
    localStorage.setItem(KEY,JSON.stringify(lista));

    //limpiar
    form.reset();
    alert("Tu registro a sido guardado con exito")
})