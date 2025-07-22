// Poem text
const kiplingPoem = `<p>Hola Yatziri Si estás leyendo esto…  
No te castigues, no te hagas daño,  
Solo soy yo, hablándote bajito desde esta habitación,  
Tal vez no sepas bien quién soy… a veces ni yo mismo lo sé,  
Pero sí sé esto: <span>te admiro</span>, y —aunque no lo creas— <span>me importas</span>.  

Sé que alguna vez me dijiste que mejor me cuidara yo,  
Y sí, tienes razón… me hace falta,  
Pero aun así, es imposible para mí no <span>pensar en ti</span>.  

Hoy no sé detalles, no sé de la operación que te van a realizar,  
Tú no quisiste contarme, y está bien,  
Porque lo único que importa es que <span>todo va a salir bien</span>.  

Si puedes dejarme <span>preocuparme</span> un poco por ti,  
Si puedes entender que no necesito saberlo todo,  
Ni el motivo, ni la operación, ni las razones,  
Porque mi única razón es <span>querer verte bien</span>…  

Si puedes abrazar la certeza de que <span>todo estará bien</span>,  
Si puedes cuidarte —no por mí, ni por nadie—  
Sino porque <span>vales demasiado</span> para no hacerlo,  

Entonces…  
<span>Respira</span>, <span>sonríe</span>, <span>sigue</span>.  

Aquí estaré,  
Aunque solo sea para decirte esto:  
<span>Cuídate mucho</span>.  
<span>Mejórate</span>.  
Porque sí… <span>me importas</span>.  

Y pase lo que pase… <span>aquí sigo</span>.  

Con todo el cariño,  
David...</p>`;

// Function to insert poem into divs
function insertPoemIntoDivs() {
	// Get all .text divs
	const textDivs = document.querySelectorAll(".text");

	// Insert poem into all .text divs
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
