async function cargarArchivos(ruta,contenedorId) {
   const contend=document.getElementById(contenedorId)
   const res=await fetch(ruta);

   if (res.ok) {
      contend.innerHTML=await res.text()
   } else {
     alert ('error') 
   }
}

function cargarVista(nombre) {
   cargarArchivos(`../componentes/proyectoformativo/${nombre}.html`, "main")
}
cargarArchivos("../componentes/header/header.html","header")
cargarArchivos("../componentes/footer/footer.html","footer")
cargarVista("inicio")
