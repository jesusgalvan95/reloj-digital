const mostrarReloj = ()=>{
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minuto = formatoHora(fecha.getMinutes());
    let segundo = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}:${minuto}:${segundo}`;

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Novienbre', 'Diciembre'];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;
}

const formatoHora = (hora)=>{
    if(hora < 10){
        hora = '0' + hora;
    }
    return hora;
}
//permite llamar al código cada cierto tiempo
setInterval(mostrarReloj, 1000);
