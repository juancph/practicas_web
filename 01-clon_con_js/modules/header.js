export function crearHeader(){
    let header = document.createElement("header")
    header.style.backgroundColor = "transparent"
    header.style.position = "absolute"
    header.style.display = "flex"
    header.style.justifyContent = "space-between"
    header.style.alignItems = "center"
    header.style.flexDirection = "row-reverse"
    header.style.height = "90px"
    header.style.width = "100%"
    
    header.appendChild(crearNav())
    header.appendChild(crearLogo())

    return header
}

function crearNav() {
    const nav = document.createElement("nav");
    nav.style.height = "100%";
    nav.style.width = "70%";
    nav.style.display = "flex";
    nav.style.justifyContent = "flex-end";
    nav.style.alignItems = "center";
    nav.style.paddingRight = "30px"
    nav.style.gap = "30px"
    nav.style.position = "relative"

    const links = crearUrl();

    links.forEach(link => {
        nav.appendChild(link);
    });

    return nav;
}

function crearUrl() {
    const hrefs = ["Inicio", "Información", "Beneficios", "Calculadora", "Instalación", "Simulador"];
    const links = [];

    hrefs.forEach(texto => {
        const url = document.createElement("a");
        url.href = "#";
        url.textContent = texto;
        
        url.style.textDecoration = "none";
        url.style.color = "white";

        links.push(url);
    });

    return links;
}

function crearLogo(){
    let logo = document.createElement("img")
    logo.src = "imagenes/logo.png"
    logo.style.width = "180px"
    logo.style.height = "80%"
    logo.style.cursor = "pointer"

    return logo
}