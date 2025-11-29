import { crearHeader } from "./modules/header.js";

//header
document.body.appendChild(crearHeader())

//body
document.body.style.width = "100vw"
document.body.style.height = "100vh"
document.body.style.margin = "0";
document.body.style.padding = "0";

//Section1
import { crearSection1 } from "./modules/section.js";
document.body.appendChild(crearSection1())