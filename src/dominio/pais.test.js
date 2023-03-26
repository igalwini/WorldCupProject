/* eslint-disable linebreak-style */
import Pais from './Pais.mjs';
const paisCorrecto = new Pais('Uruguay', 'celeste', 'H');
test('nombre pais correcto', () => {
  expect(paisCorrecto.nombre).toEqual('Uruguay');
});
test('bandera pais correcto', ()=> {
  expect(paisCorrecto.bandera).toEqual('celeste');
});
test('grupo pais correcto', ()=> {
  expect(paisCorrecto.grupo).toEqual('H');
});

test('nombre pais incorrecto', () => {
  expect(() =>paisCorrecto.setNombre(15)).toThrow();
});
test('bandera pais incorrecto', () => {
  expect(() =>paisCorrecto.setBandera('')).toThrow();
});
test('grupo pais incorrecto', () => {
  expect(() =>paisCorrecto.setGrupo(11)).toThrow();
});
test('país vacio', () => {
  expect(() => new Pais()).toThrow();
});
