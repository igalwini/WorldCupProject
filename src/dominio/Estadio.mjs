/* eslint-disable linebreak-style */
export default class Estadio {
  constructor(nombre, capacidad) {
    this.setNombre(nombre);
    this.setCapacidad(capacidad);
  }
  setNombre(unNombre) {
    if (unNombre !=undefined && unNombre.length>0) {
      this.nombre=unNombre;
    } else {
      throw new Error('El nombre no puede ser vacío');
    }
  }
  setCapacidad(unaCapacidad) {
    const input = unaCapacidad+'';
    const contar = input.replace(/[^0-9]/g, '').length;
    if (contar> 0 && unaCapacidad.length>0) {
      this.capacidad=unaCapacidad;
    } else {
      throw new Error('La capacidad debe tener números');
    }
  }
}
