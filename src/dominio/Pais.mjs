/* eslint-disable linebreak-style */
export default class Pais {
  constructor(nombre, bandera, grupo) {
    this.setNombre(nombre);
    this.setBandera(bandera);
    this.setGrupo(grupo);
  }
  setNombre(unNombre) {
    const input = unNombre+'';
    const contar = input.replace(/[^0-9]/g, '').length;

    if (contar == 0 || unNombre.length>0) {
      this.nombre=unNombre;
    } else {
      throw new Error('El nombre es inválido');
    }
  }
  setBandera(unaBandera) {
    if (unaBandera !=undefined && unaBandera.length>0) {
      this.bandera=unaBandera;
    } else {
      throw new Error('La bandera no puede ser vacía');
    }
  }
  setGrupo(unGrupo) {
    const input= unGrupo+'';
    const contar = input.replace(/[^0-9]/g, '').length;
    if (input.length==1 && contar==0) {
      this.grupo=unGrupo;
    } else {
      throw new Error('El grupo no es válido');
    }
  }
}

