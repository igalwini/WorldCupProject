/* eslint-disable linebreak-style */
import {MDCTabBar} from '@material/tab-bar';
import {MDCSelect} from '@material/select';
import Partido from '../../dominio/Partido.mjs';
import Pais from '../../dominio/Pais.mjs';
import Sistema from '../../dominio/Sistema.mjs';
import Estadio from '../../dominio/Estadio.mjs';
import Eliminatoria from '../../dominio/Eliminatoria.mjs';


// SE CREA EL MUNDIAL CON TODOS SUS DATOS
const mundial= new Sistema();
mundial.agregarPais(new Pais('qatar', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/qatar.png', 'A'));
mundial.agregarPais(new Pais('holanda', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/netherlands.png', 'A'));
mundial.agregarPais(new Pais('senegal', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/senegal.png', 'A'));
mundial.agregarPais(new Pais('ecuador', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/ecuador.png', 'A'));
mundial.agregarPais(new Pais('inglaterra', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/england.png', 'B'));
mundial.agregarPais(new Pais('estados unidos', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/usa.png', 'B'));
mundial.agregarPais(new Pais('irán', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/iran.png', 'B'));
mundial.agregarPais(new Pais('gales', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/wales.png', 'B'));
mundial.agregarPais(new Pais('argentina', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/argentina.png', 'C'));
mundial.agregarPais(new Pais('arabia saudita', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/saudi-arabia.png', 'C'));
mundial.agregarPais(new Pais('méxico', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/mexico.png', 'C'));
mundial.agregarPais(new Pais('polonia', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/poland.png', 'C'));
mundial.agregarPais(new Pais('dinamarca', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/denmark.png', 'D'));
mundial.agregarPais(new Pais('túnez', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/tunisia.png', 'D'));
mundial.agregarPais(new Pais('australia', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/australia.png', 'D'));
mundial.agregarPais(new Pais('francia', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/france.png', 'D'));
mundial.agregarPais(new Pais('alemania', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/germany.png', 'E'));
mundial.agregarPais(new Pais('japón', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/japan.png', 'E'));
mundial.agregarPais(new Pais('españa', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/spain.png', 'E'));
mundial.agregarPais(new Pais('costa rica', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/costa-rica.png', 'E'));
mundial.agregarPais(new Pais('marruecos', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/morocco.png', 'F'));
mundial.agregarPais(new Pais('croacia', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/croatia.png', 'F'));
mundial.agregarPais(new Pais('bélgica', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/belgium.png', 'F'));
mundial.agregarPais(new Pais('canadá', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/canada.png', 'F'));
mundial.agregarPais(new Pais('suiza', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/switzerland.png', 'G'));
mundial.agregarPais(new Pais('camerún', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/cameroon.png', 'G'));
mundial.agregarPais(new Pais('brasil', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/brazil.png', 'G'));
mundial.agregarPais(new Pais('serbia', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/serbia.png', 'G'));
mundial.agregarPais(new Pais('uruguay', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/uruguay.png', 'H'));
mundial.agregarPais(new Pais('portugal', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/portugal.png', 'H'));
mundial.agregarPais(new Pais('corea del Sur', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/south-korea.png', 'H'));
mundial.agregarPais(new Pais('ghana', 'https://www.theflagshop.co.uk/media/wysiwyg/porto/homepage/ghana.png', 'H'));

mundial.agregarEstadio(new Estadio('Al Bayt', '60.000'));
mundial.agregarEstadio(new Estadio('Al Janoub', '40.000'));
mundial.agregarEstadio(new Estadio('Ahmad Bin Ali', '40.000'));
mundial.agregarEstadio(new Estadio('Al Thumama', '40.000'));
mundial.agregarEstadio(new Estadio('Education City', '40.000'));
mundial.agregarEstadio(new Estadio('Internacional Khalifa', '45.000'));
mundial.agregarEstadio(new Estadio('Lusail', '80.000'));
mundial.agregarEstadio(new Estadio('974', '40.000'));

mundial.agregarPartido(new Partido(mundial.getPais('qatar'), mundial.getPais('ecuador'), 'A', '20 de Noviembre', 'Domingo', mundial.getEstadio('Al Bayt'), '13:00'));
mundial.agregarPartido(new Partido(mundial.getPais('senegal'), mundial.getPais('holanda'), 'A', '21 de Noviembre', 'Lunes', mundial.getEstadio('Al Thumama'), '13:00'));
mundial.agregarPartido(new Partido(mundial.getPais('qatar'), mundial.getPais('senegal'), 'A', '25 de Noviembre', 'Viernes', mundial.getEstadio('Al Thumama'), '10:00'));
mundial.agregarPartido(new Partido(mundial.getPais('ecuador'), mundial.getPais('holanda'), 'A', '25 de Noviembre', 'Viernes', mundial.getEstadio('Internacional Khalifa'), '13:00'));
mundial.agregarPartido(new Partido(mundial.getPais('qatar'), mundial.getPais('holanda'), 'A', '29 de Noviembre', 'Martes', mundial.getEstadio('Ahmad Bin Ali'), '12:00'));
mundial.agregarPartido(new Partido(mundial.getPais('ecuador'), mundial.getPais('senegal'), 'A', '29 de Noviembre', 'Martes', mundial.getEstadio('Internacional Khalifa'), '12:00'));
mundial.agregarPartido(new Partido(mundial.getPais('inglaterra'), mundial.getPais('irán'), 'B', '21 de Noviembre', 'Lunes', mundial.getEstadio('Internacional Khalifa'), '10:00'));
mundial.agregarPartido(new Partido(mundial.getPais('estados unidos'), mundial.getPais('gales'), 'B', '21 de Noviembre', 'Lunes', mundial.getEstadio('Ahmad Bin Ali'), '16:00'));
mundial.agregarPartido(new Partido(mundial.getPais('irán'), mundial.getPais('gales'), 'B', '25 de Noviembre', 'Viernes', mundial.getEstadio('Ahmad Bin Ali'), '7:00'));
mundial.agregarPartido(new Partido(mundial.getPais('inglaterra'), mundial.getPais('estados unidos'), 'B', '25 de Noviembre', 'Viernes', mundial.getEstadio('Ahmad Bin Ali'), '16:00'));
mundial.agregarPartido(new Partido(mundial.getPais('inglaterra'), mundial.getPais('gales'), 'B', '29 de Noviembre', 'Martes', mundial.getEstadio('Ahmad Bin Ali'), '16:00'));
mundial.agregarPartido(new Partido(mundial.getPais('irán'), mundial.getPais('estados unidos'), 'B', '29 de Noviembre', 'Martes', mundial.getEstadio('Al Thumama'), '16:00'));
mundial.agregarPartido(new Partido(mundial.getPais('argentina'), mundial.getPais('arabia saudita'), 'C', '22 de Noviembre', 'Martes', mundial.getEstadio('Lusail'), '7:00'));
mundial.agregarPartido(new Partido(mundial.getPais('méxico'), mundial.getPais('polonia'), 'C', '22 de Noviembre', 'Martes', mundial.getEstadio('974'), '13:00'));
mundial.agregarPartido(new Partido(mundial.getPais('arabia saudita'), mundial.getPais('polonia'), 'C', '26 de Noviembre', 'Sábado', mundial.getEstadio('Education City'), '10:00'));
mundial.agregarPartido(new Partido(mundial.getPais('argentina'), mundial.getPais('méxico'), 'C', '26 de Noviembre', 'Sábado', mundial.getEstadio('Lusail'), '16:00'));
mundial.agregarPartido(new Partido(mundial.getPais('argentina'), mundial.getPais('polonia'), 'C', '30 de Noviembre', 'Miércoles', mundial.getEstadio('974'), '16:00'));
mundial.agregarPartido(new Partido(mundial.getPais('arabia saudita'), mundial.getPais('méxico'), 'C', '30 de Noviembre', 'Miércoles', mundial.getEstadio('Lusail'), '16:00'));
mundial.agregarPartido(new Partido(mundial.getPais('dinamarca'), mundial.getPais('túnez'), 'D', '22 de Noviembre', 'Martes', mundial.getEstadio('Education City'), '10:00'));
mundial.agregarPartido(new Partido(mundial.getPais('francia'), mundial.getPais('australia'), 'D', '22 de Noviembre', 'Martes', mundial.getEstadio('Al Janoub'), '16:00'));
mundial.agregarPartido(new Partido(mundial.getPais('australia'), mundial.getPais('túnez'), 'D', '26 de Noviembre', 'Sábado', mundial.getEstadio('Al Janoub'), '7:00'));
mundial.agregarPartido(new Partido(mundial.getPais('francia'), mundial.getPais('dinamarca'), 'D', '26 de Noviembre', 'Sábado', mundial.getEstadio('974'), '13:00'));
mundial.agregarPartido(new Partido(mundial.getPais('dinamarca'), mundial.getPais('australia'), 'D', '30 de Noviembre', 'Miércoles', mundial.getEstadio('Al Janoub'), '12:00'));
mundial.agregarPartido(new Partido(mundial.getPais('francia'), mundial.getPais('túnez'), 'D', '30 de Noviembre', 'Miércoles', mundial.getEstadio('Education City'), '12:00'));
mundial.agregarPartido(new Partido(mundial.getPais('alemania'), mundial.getPais('japón'), 'E', '23 de Noviembre', 'Miércoles', mundial.getEstadio('Internacional Khalifa'), '10:00'));
mundial.agregarPartido(new Partido(mundial.getPais('españa'), mundial.getPais('costa rica'), 'E', '23 de Noviembre', 'Miércoles', mundial.getEstadio('Al Thumama'), '13:00'));
mundial.agregarPartido(new Partido(mundial.getPais('costa rica'), mundial.getPais('japón'), 'E', '27 de Noviembre', 'Domingo', mundial.getEstadio('Ahmad Bin Ali'), '7:00'));
mundial.agregarPartido(new Partido(mundial.getPais('españa'), mundial.getPais('alemania'), 'E', '27 de Noviembre', 'Domingo', mundial.getEstadio('Ahmad Bin Ali'), '16:00'));
mundial.agregarPartido(new Partido(mundial.getPais('españa'), mundial.getPais('japón'), 'E', '1 de Diciembre', 'Jueves', mundial.getEstadio('Internacional Khalifa'), '16:00'));
mundial.agregarPartido(new Partido(mundial.getPais('alemania'), mundial.getPais('costa rica'), 'E', '1 de Diciembre', 'Jueves', mundial.getEstadio('Ahmad Bin Ali'), '16:00'));
mundial.agregarPartido(new Partido(mundial.getPais('marruecos'), mundial.getPais('croacia'), 'F', '23 de Noviembre', 'Miércoles', mundial.getEstadio('Ahmad Bin Ali'), '7:00'));
mundial.agregarPartido(new Partido(mundial.getPais('bélgica'), mundial.getPais('canadá'), 'F', '23 de Noviembre', 'Miércoles', mundial.getEstadio('Ahmad Bin Ali'), '16:00'));
mundial.agregarPartido(new Partido(mundial.getPais('marruecos'), mundial.getPais('bélgica'), 'F', '27 de Noviembre', 'Domingo', mundial.getEstadio('Al Thumama'), '10:00'));
mundial.agregarPartido(new Partido(mundial.getPais('canadá'), mundial.getPais('croacia'), 'F', '27 de Noviembre', 'Domingo', mundial.getEstadio('Internacional Khalifa'), '13:00'));
mundial.agregarPartido(new Partido(mundial.getPais('bélgica'), mundial.getPais('croacia'), 'F', '1 de Diciembre', 'Jueves', mundial.getEstadio('Ahmad Bin Ali'), '12:00'));
mundial.agregarPartido(new Partido(mundial.getPais('marruecos'), mundial.getPais('canadá'), 'F', '1 de Diciembre', 'Jueves', mundial.getEstadio('Al Thumama'), '12:00'));
mundial.agregarPartido(new Partido(mundial.getPais('suiza'), mundial.getPais('camerún'), 'G', '24 de Noviembre', 'Jueves', mundial.getEstadio('Al Janoub'), '7:00'));
mundial.agregarPartido(new Partido(mundial.getPais('brasil'), mundial.getPais('serbia'), 'G', '24 de Noviembre', 'Jueves', mundial.getEstadio('Lusail'), '16:00'));
mundial.agregarPartido(new Partido(mundial.getPais('serbia'), mundial.getPais('camerún'), 'G', '28 de Noviembre', 'Lunes', mundial.getEstadio('Al Janoub'), '7:00'));
mundial.agregarPartido(new Partido(mundial.getPais('suiza'), mundial.getPais('brasil'), 'G', '28 de Noviembre', 'Lunes', mundial.getEstadio('974'), '13:00'));
mundial.agregarPartido(new Partido(mundial.getPais('brasil'), mundial.getPais('camerún'), 'G', '2 de Diciembre', 'Viernes', mundial.getEstadio('Lusail'), '16:00'));
mundial.agregarPartido(new Partido(mundial.getPais('suiza'), mundial.getPais('serbia'), 'G', '2 de Diciembre', 'Viernes', mundial.getEstadio('974'), '16:00'));
mundial.agregarPartido(new Partido(mundial.getPais('uruguay'), mundial.getPais('corea del sur'), 'H', '24 de Noviembre', 'Jueves', mundial.getEstadio('Education City'), '10:00'));
mundial.agregarPartido(new Partido(mundial.getPais('portugal'), mundial.getPais('ghana'), 'H', '24 de Noviembre', 'Jueves', mundial.getEstadio('974'), '13:00'));
mundial.agregarPartido(new Partido(mundial.getPais('ghana'), mundial.getPais('corea del sur'), 'H', '28 de Noviembre', 'Lunes', mundial.getEstadio('Education City'), '10:00'));
mundial.agregarPartido(new Partido(mundial.getPais('uruguay'), mundial.getPais('portugal'), 'H', '28 de Noviembre', 'Lunes', mundial.getEstadio('Lusail'), '16:00'));
mundial.agregarPartido(new Partido(mundial.getPais('portugal'), mundial.getPais('corea del sur'), 'H', '2 de Diciembre', 'Viernes', mundial.getEstadio('Education City'), '12:00'));
mundial.agregarPartido(new Partido(mundial.getPais('uruguay'), mundial.getPais('ghana'), 'H', '2 de Diciembre', 'Viernes', mundial.getEstadio('Al Janoub'), '12:00'));


mundial.agregarEliminatoria(new Eliminatoria('of1', 'ganador gr.a', 'segundo gr.b', 'octavos', '3 de Diciembre', 'Sábado', mundial.getEstadio('Internacional Khalifa'), '12:00'));
mundial.agregarEliminatoria(new Eliminatoria('of2', 'ganador gr.c', 'segundo gr.d', 'octavos', '3 de Diciembre', 'Sábado', mundial.getEstadio('Ahmad Bin Ali'), '16:00'));
mundial.agregarEliminatoria(new Eliminatoria('of3', 'ganador gr.d', 'segundo gr.c', 'octavos', '4 de Diciembre', 'Domingo', mundial.getEstadio('Al Thumama'), '12:00'));
mundial.agregarEliminatoria(new Eliminatoria('of4', 'ganador gr.b', 'segundo gr.a', 'octavos', '4 de Diciembre', 'Domingo', mundial.getEstadio('Al Bayt'), '16:00'));
mundial.agregarEliminatoria(new Eliminatoria('of5', 'ganador gr.e', 'segundo gr.f', 'octavos', '5 de Diciembre', 'Lunes', mundial.getEstadio('974'), '12:00'));
mundial.agregarEliminatoria(new Eliminatoria('of6', 'ganador gr.g', 'segundo gr.h', 'octavos', '5 de Diciembre', 'Lunes', mundial.getEstadio('Al Janoub'), '16:00'));
mundial.agregarEliminatoria(new Eliminatoria('of7', 'ganador gr.f', 'segundo gr.e', 'octavos', '6 de Diciembre', 'Martes', mundial.getEstadio('Education City'), '12:00'));
mundial.agregarEliminatoria(new Eliminatoria('of8', 'ganador gr.h', 'segundo gr.g', 'octavos', '6 de Diciembre', 'Martes', mundial.getEstadio('Lusail'), '16:00'));
mundial.agregarEliminatoria(new Eliminatoria('cf1', 'ganador of5', 'ganadorof6', 'cuartos', '9 de Diciembre', 'Viernes', mundial.getEstadio('Education City'), '16:00'));
mundial.agregarEliminatoria(new Eliminatoria('cf2', 'ganador of1', 'ganador of2', 'cuartos', '9 de Diciembre', 'Viernes', mundial.getEstadio('Lusail'), '16:00'));
mundial.agregarEliminatoria(new Eliminatoria('cf3', 'ganador of7', 'ganador of8', 'cuartos', '10 de Diciembre', 'Sábado', mundial.getEstadio('Al Thumama'), '16:00'));
mundial.agregarEliminatoria(new Eliminatoria('cf4', 'ganador of3', 'ganador of4', 'cuartos', '10 de Diciembre', 'Sábado', mundial.getEstadio('Al Bayt'), '16:00'));
mundial.agregarEliminatoria(new Eliminatoria('sf1', 'ganador cf1', 'ganador cf2', 'semis', '13 de Diciembre', 'Martes', mundial.getEstadio('Lusail'), '16:00'));
mundial.agregarEliminatoria(new Eliminatoria('sf2', 'ganador cf3', 'ganador cf4', 'semis', '14 de Diciembre', 'Miércoles', mundial.getEstadio('Al Bayt'), '16:00'));
mundial.agregarEliminatoria(new Eliminatoria('final', 'ganador sf1', 'ganador sf2', 'final', '18 de Diciembre', 'Domingo', mundial.getEstadio('Lusail'), '12:00'));

const select = new MDCSelect(document.querySelector('.mdc-select'));

select.listen('MDCSelect:change', () => {
  fixtureAPantalla();
});

function partidoGrupoAGrupos(unPartido) {
  const pais1= unPartido.pais1;
  const pais2= unPartido.pais2;
  const dia = unPartido.dia;
  const fecha= unPartido.fecha;
  const hora= unPartido.hora;
  const div1 = document.createElement('div');
  div1.className='mdc-card';
  const div2= document.createElement('div');
  div2.className='mdc-card__primary-action';
  div2.tabIndex='0';
  const sec= document.getElementById(`${pais1.grupo}`);
  const img1 = document.createElement('img');
  img1.setAttribute('src', pais1.bandera);
  img1.setAttribute('class', 'bandera');
  img1.setAttribute('alt', 'bandera '+pais1.nombre);
  const img2 = document.createElement('img');
  img2.setAttribute('src', pais2.bandera);
  img2.setAttribute('class', 'bandera');
  img2.setAttribute('alt', 'bandera'+pais2.nombre);
  const date= document.createElement('p');
  date.innerHTML=dia+' '+fecha+' / '+hora+'hs';
  const estadio=document.createElement('p');
  estadio.innerHTML='Estadio: '+unPartido.estadio.nombre+' - Capacidad: '+unPartido.estadio.capacidad;
  const versus= document.createElement('p');
  versus.innerHTML=pais1.nombre.toUpperCase()+' VS '+pais2.nombre.toUpperCase();

  div2.appendChild(date);
  div1.appendChild(div2);
  div1.appendChild(img1);
  div1.appendChild(versus);
  div1.appendChild(img2);
  div1.appendChild(estadio);
  sec.appendChild(div1);
}

function partidoEliminatoriaAGrupos(unaEliminatoria) {
  const dia = unaEliminatoria.dia;
  const fecha= unaEliminatoria.fecha;
  const hora= unaEliminatoria.hora;
  const div1 = document.createElement('div');
  div1.className='mdc-card';
  const sec= document.getElementById(`${unaEliminatoria.fase.toLowerCase()}`);
  const img1 = document.createElement('img');
  img1.setAttribute('src', 'https://sportscubecdn-wqps7yvkz.stackpathdns.com/images-fallback/flag-home.svg');
  img1.setAttribute('class', 'bandera');
  img1.setAttribute('alt', 'bandera genérica 1');
  const img2 = document.createElement('img');
  img2.setAttribute('src', 'https://sportscubecdn-wqps7yvkz.stackpathdns.com/images-fallback/flag-away.svg');
  img2.setAttribute('class', 'bandera');
  img2.setAttribute('alt', 'bandera genérica 2');
  const date= document.createElement('p');
  date.innerHTML=unaEliminatoria.titulo.toUpperCase()+': '+dia+' '+fecha+' / '+hora+'hs';
  const estadio=document.createElement('p');
  estadio.innerHTML='Estadio: '+unaEliminatoria.estadio.nombre+' - Capacidad: '+unaEliminatoria.estadio.capacidad;
  const versus= document.createElement('p');
  versus.innerHTML=unaEliminatoria.participante1.toUpperCase()+' VS '+unaEliminatoria.participante2.toUpperCase();
  div1.appendChild(date);
  div1.appendChild(img1);
  div1.appendChild(versus);
  div1.appendChild(img2);
  div1.appendChild(estadio);
  sec.appendChild(div1);
}
function partidoGrupoACalendario(unPartido) {
  const pais1= unPartido.pais1;
  const pais2= unPartido.pais2;
  const dia = unPartido.dia;
  const fecha= unPartido.fecha;
  const hora= unPartido.hora;
  const div1 = document.createElement('div');
  div1.className='mdc-card';
  const div2= document.createElement('div');
  div2.className='mdc-card__primary-action';
  div2.tabIndex='0';
  const sec= document.getElementById(`${unPartido.fecha}`);
  const img1 = document.createElement('img');
  img1.setAttribute('src', pais1.bandera);
  img1.setAttribute('class', 'bandera');
  img1.setAttribute('alt', 'bandera '+pais1.nombre);
  const img2 = document.createElement('img');
  img2.setAttribute('src', pais2.bandera);
  img2.setAttribute('class', 'bandera');
  img2.setAttribute('alt', 'bandera'+pais2.nombre);
  const date= document.createElement('p');
  date.innerHTML=dia+' '+fecha+' / '+hora+'hs';
  const estadio=document.createElement('p');
  estadio.innerHTML='Estadio: '+unPartido.estadio.nombre+' - Capacidad: '+unPartido.estadio.capacidad;
  const versus= document.createElement('p');
  versus.innerHTML=pais1.nombre.toUpperCase()+' VS '+pais2.nombre.toUpperCase();

  div2.appendChild(date);
  div1.appendChild(div2);
  div1.appendChild(img1);
  div1.appendChild(versus);
  div1.appendChild(img2);
  div1.appendChild(estadio);
  sec.appendChild(div1);
}

function partidoEliminatoriaACalendario(unaEliminatoria) {
  const dia = unaEliminatoria.dia;
  const fecha= unaEliminatoria.fecha;
  const hora= unaEliminatoria.hora;
  const div1 = document.createElement('div');
  div1.className='mdc-card';
  const sec= document.getElementById(`${unaEliminatoria.fecha}`);
  const img1 = document.createElement('img');
  img1.setAttribute('src', 'https://sportscubecdn-wqps7yvkz.stackpathdns.com/images-fallback/flag-home.svg');
  img1.setAttribute('class', 'bandera');
  img1.setAttribute('alt', 'bandera genérica 1');
  const img2 = document.createElement('img');
  img2.setAttribute('src', 'https://sportscubecdn-wqps7yvkz.stackpathdns.com/images-fallback/flag-away.svg');
  img2.setAttribute('class', 'bandera');
  img2.setAttribute('alt', 'bandera genérica 2');
  const date= document.createElement('p');
  date.innerHTML=unaEliminatoria.titulo.toUpperCase()+': '+dia+' '+fecha+' / '+hora+'hs';
  const estadio=document.createElement('p');
  estadio.innerHTML='Estadio: '+unaEliminatoria.estadio.nombre+' - Capacidad: '+unaEliminatoria.estadio.capacidad;
  const versus= document.createElement('p');
  versus.innerHTML=unaEliminatoria.participante1.toUpperCase()+' VS '+unaEliminatoria.participante2.toUpperCase();
  div1.appendChild(date);
  div1.appendChild(img1);
  div1.appendChild(versus);
  div1.appendChild(img2);
  div1.appendChild(estadio);
  sec.appendChild(div1);
}
function subirPartidosGrupos() {
  const list= mundial.registroPartido;
  for (const partido of list) {
    partidoGrupoAGrupos(partido);
  }
}
function subirPartidosEliminatoria() {
  const lista= mundial.registroEliminatoria;
  for (const eliminatoria of lista) {
    partidoEliminatoriaAGrupos(eliminatoria);
  }
}
function subirPartidosCalendario() {
  const list= mundial.registroPartido;
  const lista= mundial.registroEliminatoria;
  for (const partido of list) {
    partidoGrupoACalendario(partido);
  }
  for (const eliminatoria of lista) {
    partidoEliminatoriaACalendario(eliminatoria);
  }
}
const fixture=document.getElementById('SecFixture');
const cal= document.getElementById('divCalendario');
const combo= document.getElementById('comboBox');
const grupos= document.getElementById('divGrupos');
function fixtureAPantalla() {
  if (select.value=='grupos') {
    fixture.innerHTML='';
    fixture.append(combo);
    fixture.append(grupos);
  }
  if (select.value== 'calendario') {
    fixture.innerHTML='';
    fixture.append(combo);
    fixture.append(cal);
  }
}

subirPartidosGrupos();
subirPartidosEliminatoria();
subirPartidosCalendario();
fixtureAPantalla();
// FUNCIONES CUENTA REGRESIVA
const end = new Date('dec 20 2022 13:00:00 GMT-0500');
const losSegundos = 1000;
const losMinutos = losSegundos * 60;
const lasHoras = losMinutos * 60;
const losDias = lasHoras * 24;
// eslint-disable-next-line prefer-const
let timer;


function showRemaining() {
  const now = new Date();
  const diferencia = end - now;// diferencia es el tiempo que falta para el mundial en milisegundos

  if (diferencia < 0) {
    clearInterval(timer);
    document.getElementById('SecCuentaRegresiva').innerHTML = 'ES EL MUNDIAL!!!';
    return;
  }

  const dias = Math.floor(diferencia / losDias);
  const horas = Math.floor((diferencia % losDias) / lasHoras);
  const minutos = Math.floor((diferencia % lasHoras) / losMinutos);
  const segundos = Math.floor((diferencia % losMinutos) / losSegundos);

  document.getElementById('numDias').innerHTML = dias;
  document.getElementById('numHoras').innerHTML = horas;
  document.getElementById('numMinutos').innerHTML = minutos;
  document.getElementById('numSegundos').innerHTML = segundos;
}
timer = setInterval(showRemaining, 1000);


const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
tabBar.listen('MDCTabBar:activated', (activatedEvent) => {
  document.querySelectorAll('.content').forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove('sample-content--hidden');
    } else {
      element.classList.add('sample-content--hidden');
      timer;
    }
  });
});


