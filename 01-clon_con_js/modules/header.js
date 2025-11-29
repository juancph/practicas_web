export function crearHeader(){
    let header = document.createElement("header")
    header.style.backgroundColor = "black"
    header.style.position = "absolute"
    header.style.display = "flex"
    header.style.justifyContent = "space-between"
    header.style.alignItems = "center"
    header.style.flexDirection = "row-reverse"
    header.style.height = "90px"
    header.style.width = "100%"
    
    header.appendChild(crearNav())

    return header
}

function crearNav() {
    const nav = document.createElement("nav");
    nav.style.height = "100%";
    nav.style.width = "60%";
    nav.style.display = "flex";
    nav.style.justifyContent = "space-between";
    nav.style.alignItems = "center";

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