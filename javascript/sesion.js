const datos= JSON.parse(localStorage.getItem('registrate')) || [];

const login=document.getElementById('login')

login.addEventListener("submit",(a)=>{
    a.preventDefault();


const  usuario=document.getElementById('usuario').value.trim()
console.log(usuario)

const contraseña=document.getElementById('contraseña').value.trim()
console.log(contraseña)

datos.some(c =>{
if (c.name === usuario) {
    alert("Usuario Correcto")

if(c.contraseña === contraseña){
    alert("Contraseña Correcta")
    }
} else {
    alert("Usuario y Contraseña Incorrectos")
}})

})