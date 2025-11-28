//body
document.body.style.width = "100vw"
document.body.style.height = "100vh"
document.body.style.margin = "0";
document.body.style.padding = "0";


//Header
let header = document.createElement("header")
document.body.appendChild(header)
header.style.backgroundColor = "transparent"
header.style.position = "absolute"
header.style.display = "flex"
header.style.justifyContent = "space-between"
header.style.alignItems = "center"
header.style.flexDirection = "row-reverse"
header.style.height = "90px"
header.style.width = "100%"


let nav = document.createElement("nav")
header.appendChild(nav)
nav.style.height = "100%"
nav.style.width = "60%"
nav.style.display = "flex"
nav.style.justifyContent = "space-between"
nav.style.alignItems = "center"


let hrefs = ["Inicio", "Información", "Beneficios", "Calculadora", "Instalación", "Simulador"]
hrefs.forEach(a => {
    url = document.createElement("a")
    url.href = "#"
    url.textContent = a
    nav.appendChild(url)
    
    url.style.textDecoration = "none"
    url.style.color = "white"
})

let logo = document.createElement("img")
logo.src = "imagenes/logo.png"
header.appendChild(logo)
logo.style.width = "180px"
logo.style.height = "80%"
logo.style.cursor = "pointer"


//Seccion #1
let section1 = document.createElement("section")
document.body.appendChild(section1)
section1.style.width = "100%"
section1.style.height = "100%"
section1.style.backgroundImage = "url(imagenes/fondo.jpg)"
section1.style.backgroundSize = "cover"
section1.style.backgroundRepeat = "no-repeat"

h1 = document.createElement("h1")
section1.appendChild(h1)
h1.textContent = "ENERGÍA SOLAR"
p = document.createElement("p")
p.textContent = "Creemos en un futuro donde el sol sea la principal fuente de energía para todos, sin límites ni contaminación."
section1.appendChild(p)