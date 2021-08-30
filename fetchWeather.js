const fetch = require("node-fetch")

const getTashkentWeather = async () =>  {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=1484839&appid=38ddce7e3fc97852e666d0ab656ec7cc&units=metric`)
        const json = await response.json()
        return json
    } catch (error) {
        console.log(error)
    }
}
const getSamarkandWeather = async () =>  {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=1114927&appid=38ddce7e3fc97852e666d0ab656ec7cc&units=metric`)
        const json = await response.json()
        return json
    } catch (error) {
        console.log(error)
    }
}
const getBukharaWeather = async () =>  {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=1114929&appid=38ddce7e3fc97852e666d0ab656ec7cc&units=metric`)
        const json = await response.json()
        return json
    } catch (error) {
        console.log(error)
    }
}
const getNamanganWeather = async () =>  {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=1484842&appid=38ddce7e3fc97852e666d0ab656ec7cc&units=metric`)
        const json = await response.json()
        return json
    } catch (error) {
        console.log(error)
    }
}
const getAndijanWeather = async () =>  {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=1484846&appid=38ddce7e3fc97852e666d0ab656ec7cc&units=metric`)
        const json = await response.json()
        return json
    } catch (error) {
        console.log(error)
    }
}
const getFerganaWeather = async () =>  {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=1484845&appid=38ddce7e3fc97852e666d0ab656ec7cc&units=metric`)
        const json = await response.json()
        return json
    } catch (error) {
        console.log(error)
    }
}
const getQashqadaryoWeather = async () =>  {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=1114928&appid=38ddce7e3fc97852e666d0ab656ec7cc&units=metric`)
        const json = await response.json()
        return json
    } catch (error) {
        console.log(error)
    }
}
const getSirdaryoWeather = async () =>  {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=1484840&appid=38ddce7e3fc97852e666d0ab656ec7cc&units=metric`)
    const json = await response.json()
    return json
}
const getNavoiyWeather = async () =>  {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=1484841&appid=38ddce7e3fc97852e666d0ab656ec7cc&units=metric`)
    const json = await response.json()
    return json
}
const getXorazmWeather = async () =>  {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=1484843&appid=38ddce7e3fc97852e666d0ab656ec7cc&units=metric`)
    const json = await response.json()
    return json
}
const getJizzakhWeather = async () =>  {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=1484844&appid=38ddce7e3fc97852e666d0ab656ec7cc&units=metric`)
    const json = await response.json()
    return json
}
const getSurxondaryoWeather = async () =>  {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=1114926&appid=38ddce7e3fc97852e666d0ab656ec7cc&units=metric`)
    const json = await response.json()
    return json
}
const getTashkentVilWeather = async () =>  {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=1484838&appid=38ddce7e3fc97852e666d0ab656ec7cc&units=metric`)
    const json = await response.json()
    return json
}

module.exports = {
    getTashkentWeather,
    getSamarkandWeather,
    getBukharaWeather,
    getNamanganWeather,
    getAndijanWeather,
    getFerganaWeather,
    getQashqadaryoWeather,
    getSirdaryoWeather,
    getNavoiyWeather,
    getXorazmWeather,
    getJizzakhWeather,
    getSurxondaryoWeather,
    getTashkentVilWeather
}

