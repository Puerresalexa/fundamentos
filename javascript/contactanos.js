const form=document.getElementById  ('contactanos')
const KEY="contactanos"

form.addEventListener("submit", (i)=>{
    i.preventDefault();
    const contacto={
        nombre:document.getElementById('nombre').value.trim(),
        correo:document.getElementById('correo').value.trim(),
        celular:document.getElementById('celular').value.trim(),
        mensaje:document.getElementById('mensaje').value.trim(),
    }

    const lista=JSON.parse(localStorage.getItem(KEY)) || [];

    lista.push(contacto);

    localStorage.setItem(KEY,JSON.stringify(lista));

    form.reset();
    alert("Tu mensaje fue guardado")
})