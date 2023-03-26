/* eslint-disable linebreak-style */
import Estadio from './Estadio.mjs';
const estadioCorrecto = new Estadio('Lusail', '40.000');
test('nombre estadio correcto', () => {
  expect(estadioCorrecto.nombre).toEqual('Lusail');
});
test('capacidad estadio correcta', () => {
  expect(estadioCorrecto.capacidad).toEqual('40.000');
});
test('capacidad incorrecta', () => {
  expect(() =>estadioCorrecto.setCapacidad('hola')).toThrow();
});
test('nombre incorrecto', () => {
  expect(() => new Estadio('', '40.000')).toThrow();
});
test('estadio vacio', () => {
  expect(() => new Estadio()).toThrow();
});
