const axios = require('axios')

let getLugarLatLon = async(direccion) => {

    let encodeDireccion = encodeURI(direccion)

    const instance = axios.create({
        baseURL: 'http://api.weatherapi.com/v1/current.json',
        params: {
            key: '7e4dc3357fad451f996143603210801',
            q: encodeDireccion
        }
    });

    const response = await instance.get()

    const data = response.data.location
    const localizacion = data.name + '--' + data.region + '--' + data.country
    const lat = data.lat
    const lon = data.lon

    return {
        localizacion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLon
}