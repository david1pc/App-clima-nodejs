const axios = require('axios')


const getClima = async(latitud, longitud) => {

    let encodeLatitud = encodeURI(latitud)
    let encodeLongitud = encodeURI(longitud)
    let param = encodeLatitud + ',' + encodeLongitud

    const instance = axios.create({
        baseURL: 'http://api.weatherapi.com/v1/current.json',
        params: {
            key: '7e4dc3357fad451f996143603210801',
            q: param
        }
    });

    const respuesta = await instance.get()

    const data = respuesta.data
    const current = data.current
    const temperatura = current.temp_c

    return temperatura
}

module.exports = {
    getClima
}