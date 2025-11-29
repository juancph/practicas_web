//Section1
export function crearSection1(){
    let section1 = document.createElement("section")
    section1.style.width = "100%"
    section1.style.height = "100%"
    section1.style.backgroundImage = "url(imagenes/fondo.jpg)"
    section1.style.backgroundSize = "cover"
    section1.style.backgroundRepeat = "no-repeat"
    section1.style.position = "relative"
    section1.style.zIndex = -1
    section1.style.display = "flex"
    section1.style.justifyContent = "center"
    section1.style.alignItems = "start"
    section1.style.flexDirection = "column"
    section1.style.color = "white"

    let style = document.createElement("style")
    style.textContent = `
        .section1::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            z-index: -1;
            width: 100%;
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.5),  /* inicio más claro */
                rgba(0, 0, 0, 0.5),  /* intermedio */
                rgba(0, 0, 0, 1)     /* parte inferior más oscura */
            );
            transition: background 0.5s ease-in-out;
        }
    `
    document.head.appendChild(style)
    section1.classList.add("section1")

    let h1 = document.createElement("h1")
    section1.appendChild(h1)
    h1.textContent = "ENERGÍA SOLAR"
    h1.style.fontSize = "50px"
    h1.style.marginLeft = "91px"


    let p = document.createElement("p")
    p.textContent = "Creemos en un futuro donde el sol sea la principal fuente de energía para todos, sin límites ni contaminación."
    p.style.fontSize = "20px"
    p.style.marginLeft = "91px"

    section1.appendChild(p)

    return section1
}