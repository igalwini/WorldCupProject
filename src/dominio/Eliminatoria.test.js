import Eliminatoria from './Eliminatoria.mjs';
import Estadio from './Estadio.mjs';
const Lusail= new Estadio('Lusail', '80.000');
const eliminatoriaCorrecta = new Eliminatoria('final', 'uruguay', 'brasil', 'final', '18 de diciembre', 'Lunes', Lusail, '7:00');
test('titulo eliminatoria correcto', () => {
  expect(eliminatoriaCorrecta.titulo).toEqual('final');
});
test('participante 1 eliminatoria correcto', () => {
  expect(eliminatoriaCorrecta.participante1).toEqual('uruguay');
});
test('participante 2 eliminatoria correcto', () => {
  expect(eliminatoriaCorrecta.participante2).toEqual('brasil');
});

test('fase eliminatoria correcto', () => {
  expect(eliminatoriaCorrecta.fase).toEqual('final');
});

test('fecha eliminatoria correcto', () => {
  expect(eliminatoriaCorrecta.fecha).toEqual('18 de diciembre');
});
test('dia eliminatoria correcto', () => {
  expect(eliminatoriaCorrecta.dia).toEqual('Lunes');
});
test('estadio eliminatoria correcto', () => {
  expect(eliminatoriaCorrecta.estadio.nombre).toEqual('Lusail');
});
test('hora eliminatoria correcto', () => {
  expect(eliminatoriaCorrecta.hora).toEqual('7:00');
});

test('fase incorrecta', () => {
  expect(() => new Eliminatoria('final', 'uruguay', 'brasil', 'finallll', '18 de diciembre', 'Lunes', Lusail, '7:00')).toThrow();
});
test('fecha incorrecta', () => {
  expect(() => new Eliminatoria('final', 'uruguay', 'brasil', 'final', 'diciembre', 'Lunes', Lusail, '7:00')).toThrow();
});

test('dia incorrecta', () => {
  expect(() => new Eliminatoria('final', 'uruguay', 'brasil', 'final', '18 de diciembre', 'Lunessssss', Lusail, '7:00')).toThrow();
});

test('hora incorrecta', () => {
  expect(() => new Eliminatoria('final', 'uruguay', 'brasil', 'final', '18 de diciembre', 'Lunes', Lusail, 'aaa')).toThrow();
});
test('participante 1 incorrecto', () => {
  expect(() => new Eliminatoria('final', '', 'brasil', 'final', '18 de diciembre', 'Lunes', Lusail, '7:00')).toThrow();
});

test('participante 2 incorrecto', () => {
  expect(() => new Eliminatoria('final', 'uruguay', '', 'final', '18 de diciembre', 'Lunes', Lusail, '7:00')).toThrow();
});
test('estadio incorrecto', () => {
  expect(() => new Eliminatoria('final', 'uruguay', 'brasil', 'final', '18 de diciembre', 'Lunes', 'Lusaill', '7:00')).toThrow();
});
test('Eliminatoria vacia', () => {
  expect(() => new Eliminatoria()).toThrow();
});


