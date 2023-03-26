/* eslint-disable linebreak-style */
import Partido from './Partido.mjs';
import Pais from './Pais.mjs';
import Estadio from './Estadio.mjs';
const qatar= new Pais('qatar', 'bandera qatar', 'A');
const ecuador= new Pais('ecuador', 'bandera ecuador', 'A');
const lusail= new Estadio('Lusail', '80.000');
const unPartido= new Partido(qatar, ecuador, 'A', '20 de Noviembre', 'Domingo', lusail, '13:00');


test('creación de un pais1 correcto', () => {
  expect(unPartido.pais1.nombre).toEqual('qatar');
});

test('creación de un pais2 correcto', () => {
  expect(unPartido.pais2.nombre).toEqual('ecuador');
});

test('creación de un grupo correcto', () => {
  expect(unPartido.grupo).toEqual('A');
});

test('creación de una fecha correcta', () => {
  expect(unPartido.fecha).toEqual('20 de Noviembre');
});

test('creación de una dia correcto', () => {
  expect(unPartido.dia).toEqual('Domingo');
});

test('creación de una estadio correcto', () => {
  expect(unPartido.estadio.nombre).toEqual('Lusail');
});

test('creación de una hora correcta', () => {
  expect(unPartido.hora).toEqual('13:00');
});

test('creación de una hora incorrecta', () => {
  expect(() =>unPartido.setHora('hola')).toThrow();
});

test('creación de un día incorrecto', () => {
  expect(() =>unPartido.setDia('5')).toThrow();
});

test('creación de una fecha incorrecta', () => {
  expect(() =>unPartido.setFecha('agua')).toThrow();
});
test('creación de un grupo incorrecto', () => {
  expect(() =>unPartido.setGrupo('343')).toThrow();
});
test('creación de un estadio incorrecto', () => {
  expect(() =>unPartido.setEstadio('lusail')).toThrow();
});
test('creación de pais 1 incorrecto', () => {
  expect(() =>unPartido.setPais1('qatar')).toThrow();
});
test('creación de pais 2 incorrecto', () => {
  expect(() =>unPartido.setPais2('ecuador')).toThrow();
});
test('creación de pais 2 incorrecto', () => {
  expect(() =>new Partido()).toThrow();
});
