/* eslint-disable linebreak-style */
export default class Partido {
  constructor(pais1, pais2, grupo, fecha, dia, estadio, hora) {
    this.setPais1(pais1);
    this.setPais2(pais2);
    this.setGrupo(grupo);
    this.setFecha(fecha);
    this.setDia(dia);
    this.setEstadio(estadio);
    this.setHora(hora);
  }

  setEstadio(unEstadio) {
    const esEstadio= unEstadio.capacidad!=undefined;
    if ( unEstadio!=undefined && esEstadio) {
      this.estadio=unEstadio;
    } else {
      throw new Error('El estadio es inválido');
    }
  }
  setPais1(unPais) {
    const esPais= unPais.bandera!=undefined;
    if (unPais!=undefined && esPais) {
      this.pais1=unPais;
    } else {
      throw new Error('El país es inválido');
    }
  }
  setPais2(unPais) {
    const esPais= unPais.bandera!=undefined;
    if (unPais!=undefined && esPais) {
      this.pais2=unPais;
    } else {
      throw new Error('El país es inválido');
    }
  }
  setGrupo(unGrupo) {
    const input= unGrupo+'';
    const contar = input.replace(/[^0-9]/g, '').length; // te cuenta los numeros
    if (input.length==1 && contar==0) {
      this.grupo=unGrupo;
    } else {
      throw new Error('El grupo no es válido');
    }
  }

  setFecha(unaFecha) {
    const input= unaFecha+'';
    const contar = input.replace(/[^0-9]/g, '').length;
    if (input.length>0 && contar>0) {
      this.fecha=unaFecha;
    } else {
      throw new Error('La fecha debe tener números');
    }
  }


  setDia(unDia) {
    const input = unDia+'';
    const contar = input.replace(/[^0-9]/g, '').length;
    if (contar==0 && unDia.length>0) {
      this.dia=unDia;
    } else {
      throw new Error('El día no es válido');
    }
  }

  setHora(unaHora) {
    const input = unaHora+'';
    const contar = input.replace(/[^0-9]/g, '').length;
    if (contar> 0 && unaHora.length>0) {
      this.hora=unaHora;
    } else {
      throw new Error('La hora es inválida');
    }
  }
}

