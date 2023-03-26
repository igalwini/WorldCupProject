export default class Eliminatoria {
  constructor(titulo, participante1, participante2, fase, fecha, dia,
      estadio, hora) {
    this.setTitulo(titulo);
    this.setP1(participante1);
    this.setP2(participante2);
    this.setFase(fase);
    this.setFecha(fecha);
    this.setDia(dia);
    this.setEstadio(estadio);
    this.setHora(hora);
  }
  setTitulo(unTitulo) {
    if (unTitulo !=undefined && unTitulo.length>0) {
      this.titulo=unTitulo;
    } else {
      throw new Error('El título no puede ser vacío');
    }
  }
  setP1(unParticipante) {
    if (unParticipante !=undefined && unParticipante.length>0) {
      this.participante1=unParticipante;
    } else {
      throw new Error('El participante no puede ser vacío');
    }
  }
  setP2(unParticipante) {
    if (unParticipante !=undefined && unParticipante.length>0) {
      this.participante2=unParticipante;
    } else {
      throw new Error('El participante no puede ser vacío');
    }
  }
  setFase(unaFase) {
    const fases= ['octavos', 'cuartos', 'semis', 'final'];
    if (unaFase!=undefined && unaFase.length>0 && fases.includes(unaFase.toLowerCase())) {
      this.fase=unaFase;
    } else {
      throw new Error('La fase es inválida');
    }
  }
  setEstadio(unEstadio) {
    const esEstadio= unEstadio.capacidad!=undefined;
    if ( unEstadio!=undefined && esEstadio) {
      this.estadio=unEstadio;
    } else {
      throw new Error('El estadio es inválido');
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
    const dias= ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
    if (unDia!=undefined && dias.includes(unDia.toLowerCase())) {
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

