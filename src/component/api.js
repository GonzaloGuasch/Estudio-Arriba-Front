import axios from 'axios';

const server = 'http://localhost:8080/';

const request = (type, path, body) => axios
    .request({ url: `${server}${path}`, method: type, data: body })
    .then(req => req.data);

export const todasClases = body => request('get', 'clase/getAllClases');
export const allAlumnes = body => request('get', 'alumne/getTodes');
export const clasesDeAlumne = body => request('get', 'clase/clasesDeAlumne/' + body.nombreAlumne);
export const pagosAlumne = body => request('get', 'clase/pagosDeClase' , body);

export const asistenciaMes = body => request('get', 'clase/asistenciasDelMes/' + body.nombreAlumne + '/' + body.nombreClase + '/' + body.mesDeAsistencia);
export const pagosMes = body => request('get', 'clase/pagosDeClase/' + body.nombreAlumne + '/' + body.nombreClase + '/' + body.mesDeAsistencia);
export const sumarAsistenciaMes = body => request('post', 'clase/registrarAsistencia', body);

export const anotarClase = body => request('post', 'clase/anotarse', body);
export const dejarClase = body => request('post', 'clase/dejarClase', body);

export const agregarAlumne = body => request('post', 'alumne/registrar', body);
export const agregarClase = body => request('post', 'clase/registrar', body);
