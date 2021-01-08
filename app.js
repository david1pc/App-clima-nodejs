const lugar = require('./model/lugar')
const clima = require('./model/clima')

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd'
        }
    })
    .argv


let getInfo = async() => {

    try {
        let lugarSolicitado = await lugar.getLugarLatLon(argv.direccion)
        let climaSolicitado = await clima.getClima(lugarSolicitado.lat, lugarSolicitado.lon)

        console.log(`El clima de la ciudad ${lugarSolicitado.localizacion} es ${climaSolicitado}C.`)
    } catch (error) {
        console.log(`No se pudo determinar el clima de ${argv.direccion}`)
    }
}

getInfo()