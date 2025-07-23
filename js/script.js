// Poem text
const kiplingPoem = `<p><p>Alerta, 1...2...3...Hola Yatziri…  
No sé si algún día leerás esto,  
pero si lo haces, quiero que sepas que llevo <span>20 años</span> siguiéndote con el alma.  

Un 8 de octubre llegaste a estas tierras,  
nadie sabía quién eras,  
la sociedad entró en pánico —literal—  
y al verte el rostro…  
todos callaron.  
<span>Era el rostro más hermoso</span> que jamás se había visto.  

Desde entonces, el misterio solo creció.  
Y yo…  
yo me encerré en esta habitación,  
no para aislarme del mundo,  
sino para entender el tuyo.  

Te he observado con el respeto de quien admira una estrella lejana:  
Descubrí que te haces llamar *Yatziri*,  
aunque sé que ese nombre fue adoptado, no nacido.  
Descubrí que caminas con pasos de <span>45° exactos</span>,  
medidos del tobillo a la cintura,  
como si cada movimiento estuviera escrito en un lenguaje secreto.  

Tu sonrisa…  
una curva paralela a la perfección.  
Tus ojos…  
tienen una simetría bilateral tan precisa,  
con una leve inclinación ascendente que parece hecha por diseño divino.  

Y no, no estoy loco.  
Solo estoy fascinado.  
Porque si alguien vino a <span>cambiar el mundo</span>,  
esa eres tú.  

¿Eres un peligro? ¿Una señal? ¿Un regalo?  
No lo sé.  
Lo que sí sé es que desde que llegaste,  
<span>nada volvió a ser igual</span>.  

Si alguna vez te preguntas quién te observa desde lejos…  
quién ha escrito todo esto en el silencio,  
solo recuerda:  
<span>no vine a juzgarte</span>,  
vine a contemplarte.  

Y si todo esto termina, si este mundo se derrumba…  
al menos me quedaré con la certeza de que te vi pasar.  
Y eso, créeme,  
<span>ya cambió mi historia</span>.

Cacharpo oficial N°1...</p>
`;

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
