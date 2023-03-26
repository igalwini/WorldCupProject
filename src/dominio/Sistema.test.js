/* eslint-disable linebreak-style */
import Sistema from './Sistema.mjs';
import Pais from './Pais.mjs';
import Estadio from './Estadio.mjs';
import Eliminatoria from './Eliminatoria.mjs';
import Partido from './Partido.mjs';
const sistemaCorrecto = new Sistema();
const uruguay= new Pais('Uruguay', 'bandera', 'H');
const brasil= new Pais('Brasil', 'bandera', 'F');
const argentina= new Pais('Argentina', 'bandera', 'C');
const lusail= new Estadio('Lusail', '40.000');
const final= new Eliminatoria('final', 'uruguay', 'portugal', 'final', '18 de diciembre', 'sábado', lusail, '7:00');
const unPartido= new Partido(argentina, brasil, 'A', '8 de Diciembre', 'Lunes', lusail, '7:00');
test('agregar pais correcto', () => {
  sistemaCorrecto.agregarPais(uruguay);
  expect(sistemaCorrecto.registroPais[0].nombre).toEqual('Uruguay');
});
test('agregar partido correcto', () => {
  sistemaCorrecto.agregarPartido(unPartido);
  expect(sistemaCorrecto.registroPartido[0].grupo).toEqual('A');
});
test('agregar estadio correcto', () => {
  sistemaCorrecto.agregarEstadio(lusail);
  expect(sistemaCorrecto.registroEstadio[0].nombre).toEqual('Lusail');
});
test('agregar eliminatoria correcta', () => {
  sistemaCorrecto.agregarEliminatoria(final);
  expect(sistemaCorrecto.registroEliminatoria[0].titulo).toEqual('final');
});
test('agregar pais incorrecto', () => {
  expect(() =>sistemaCorrecto.agregarPais('Uruguay')).toThrow();
});
test('agregar partido incorrecto', () => {
  expect(() =>sistemaCorrecto.agregarPartido('unPartido')).toThrow();
});
test('agregar estadio incorrecto', () => {
  expect(() =>sistemaCorrecto.agregarEstadio('lusail')).toThrow();
});
test('agregar eliminatoria incorrecto', () => {
  expect(() =>sistemaCorrecto.agregarEliminatoria('final')).toThrow();
});
test('agregar pais vacio', () => {
  expect(() =>sistemaCorrecto.agregarPais()).toThrow();
});
test('agregar partido vacio', () => {
  expect(() =>sistemaCorrecto.agregarPartido()).toThrow();
});
test('agregar estadio vacío', () => {
  expect(() =>sistemaCorrecto.agregarEstadio()).toThrow();
});
test('agregar eliminatoria vacía', () => {
  expect(() =>sistemaCorrecto.agregarEliminatoria()).toThrow();
});
test('get pais correcto', () => {
  expect(sistemaCorrecto.getPais('Uruguay').nombre).toBe('Uruguay');
});
test('get pais incorrecto', () => {
  expect(() =>sistemaCorrecto.getPais('Uruguaaaaa')).toThrow();
});
test('get estadio correcto', () => {
  expect(sistemaCorrecto.getEstadio('Lusail').nombre).toBe('Lusail');
});
test('get estadio incorrecto', () => {
  expect(() =>sistemaCorrecto.getEstadio('lusaillll')).toThrow();
});
