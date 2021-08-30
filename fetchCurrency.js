const fetch = require("node-fetch")

const getCurrency = async () =>  {
    try {
        const response = await fetch(`https://cbu.uz/uz/arkhiv-kursov-valyut/json/`)
        const json = await response.json()
        return json
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getCurrency
}