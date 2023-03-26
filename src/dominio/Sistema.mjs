/* eslint-disable linebreak-style */
export default class Sistema {
  constructor() {
    this.registroPais = [];
    this.registroPartido = [];
    this.registroEstadio = [];
    this.registroEliminatoria= [];
  }
  agregarPais(unPais) {
    if (unPais!=undefined && unPais.nombre.length>0) {
      this.registroPais.push(unPais);
    } else {
      throw new Error('Debe ingresar un país');
    }
  }
  agregarPartido(unPartido) {
    if (unPartido!=undefined && unPartido.grupo.length>0) {
      this.registroPartido.push(unPartido);
    } else {
      throw new Error('Debe ingresar un partido');
    }
  }
  agregarEstadio(unEstadio) {
    if (unEstadio!=undefined && unEstadio.nombre.length>0) {
      this.registroEstadio.push(unEstadio);
    } else {
      throw new Error('Debe ingresar un estadio');
    }
  }
  agregarEliminatoria(unaEliminatoria) {
    if (unaEliminatoria!=undefined && unaEliminatoria.titulo.length>0) {
      this.registroEliminatoria.push(unaEliminatoria);
    } else {
      throw new Error('Debe ingresar una eliminatoria');
    }
  }

  getEstadio(nombreEstadio) {
    const estadios= this.registroEstadio;
    let res=undefined;
    for ( const estadio of estadios) {
      if (estadio.nombre.toUpperCase()==nombreEstadio.toUpperCase()) {
        res=estadio;
      }
    }
    if (res!=undefined) {
      return res;
    } else {
      throw new Error('No se encontró el estadio');
    }
  }
  getPais(nombrePais) {
    const paises= this.registroPais;
    let encontrado=undefined;
    for ( const pais of paises) {
      if (pais.nombre.toUpperCase()==nombrePais.toUpperCase()) {
        encontrado=pais;
      }
    }
    if (encontrado!=undefined) {
      return encontrado;
    } else {
      throw new Error('No se encontró el país');
    }
  }
}

