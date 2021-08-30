const fetch = require("./fetch")
const axios = require('axios')
const { groupSettings } = require("./queries")

const { getTashkentWeather, getSamarkandWeather, getBukharaWeather, getNamanganWeather, getAndijanWeather, getFerganaWeather, getQashqadaryoWeather, getSirdaryoWeather, getNavoiyWeather, getXorazmWeather, getJizzakhWeather, getSurxondaryoWeather, getTashkentVilWeather } = require("./fetchWeather")
const { getCurrency } = require("./fetchCurrency")

const parse_mode = "HTML"

async function index () {
    const response = await fetch(groupSettings)
    const settingJson = await response.json()
    const setting = await settingJson?.data?.settings
    
    const currency = await getCurrency()
    const usd = currency.find(element => element.Code === "840")
    const euro = currency.find(element => element.Code === "978")
    const rubl = currency.find(element => element.Code === "643")
    const gbp = currency.find(element => element.Code === "826")
    const tl = currency.find(element => element.Code === "949")
    
    const tashkentData = await getTashkentWeather()
    const samarkandData = await getSamarkandWeather()
    const bukharaData = await getBukharaWeather()
    const namanganData = await getNamanganWeather()
    const andijanData = await getAndijanWeather()
    const ferganaData = await getFerganaWeather()
    const qashqadaryoData = await getQashqadaryoWeather()
    const sirdaryoData = await getSirdaryoWeather()
    const navoiyData = await getNavoiyWeather()
    const xorazmData = await getXorazmWeather()
    const jizzakhData = await getJizzakhWeather()
    const surxondaryoData = await getSurxondaryoWeather()
    const tashkentVilData = await getTashkentVilWeather()
    
    const regions = ["Toshkent shahri", "Samarqand viloyati", "Buxoro viloyati", "Namangan viloyati", "Andijon viloyati", "Farg'ona viloyati", "Qashqadaryo viloyati", "Sirdaryo viloyati", "Navoiy viloyati", "Xorazm viloyati", "Jizzax viloyati", "Surxondaryo viloyati", "Toshkent viloyati"]
    
    const sunrise = `${new Date(tashkentData?.sys?.sunrise * 1000).toLocaleString('en-US', { hour12: false }).split(" ")[1]}`
    const sunset = `${new Date(tashkentData?.sys?.sunset * 1000).toLocaleString('en-US', { hour12: false }).split(" ")[1]}`
    
    const currencyMsg = `<b>Bugungi valyuta narxlari: </b>\n\n${usd.CcyNm_UZ} - ${usd.Rate} so'm\n${euro.CcyNm_UZ} - ${euro.Rate} so'm\n${rubl.CcyNm_UZ} - ${rubl.Rate} so'm\n${gbp.CcyNm_UZ} - ${gbp.Rate} so'm\n${tl.CcyNm_UZ} - ${tl.Rate} so'm`
    
    const weatherMsg = `<b>Bugungi ob-havo xabarlari:</b>\n\n1. ${regions[0]}: ${Math.ceil(tashkentData?.main?.temp)} daraja\n2.  ${regions[1]}: ${Math.ceil(samarkandData?.main?.temp)} daraja\n3.  ${regions[2]}: ${Math.ceil(bukharaData?.main?.temp)} daraja\n4.  ${regions[3]}: ${Math.ceil(namanganData?.main?.temp)} daraja\n5.  ${regions[4]}: ${Math.ceil(andijanData?.main?.temp)} daraja\n6.  ${regions[5]}: ${Math.ceil(ferganaData?.main?.temp)} daraja\n7.  ${regions[6]}: ${Math.ceil(qashqadaryoData?.main?.temp)} daraja\n8.  ${regions[7]}: ${Math.ceil(sirdaryoData?.main?.temp)} daraja\n9.  ${regions[8]}: ${Math.ceil(navoiyData?.main?.temp)} daraja\n10. ${regions[9]}: ${Math.ceil(xorazmData?.main?.temp)} daraja\n11. ${regions[10]}: ${Math.ceil(jizzakhData?.main?.temp)} daraja\n12. ${regions[11]}: ${Math.ceil(surxondaryoData?.main?.temp)} daraja\n13. ${regions[12]}: ${Math.ceil(tashkentVilData?.main?.temp)} daraja\n\n Shamol tezligi: o'rtacha ${Math.ceil(tashkentData.wind.speed)} m/s.\n\n Toshkent vaqti bo'yicha quyosh chiqishi: ${sunrise}\n Quyosh botishi: ${sunset}`
    
    const timeNow = new Date();
    const hours   = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    const seconds = timeNow.getSeconds();
    let timeString = "" + ((hours < 10) ? "0" : "") + hours
    timeString  += ((minutes < 10) ? ":0" : ":") + minutes
    timeString  += ((seconds < 10) ? ":0" : ":") + seconds
    
    setting.forEach(element => {
        if(element.currency_message_time === timeString) {
            (async () => {
                const res = await axios.post(`https://api.telegram.org/bot1835794695:AAEYkz_tSEM-fNx-9fZYrYhXIo4n3UwnEyQ/sendMessage?chat_id=${element.group_id}&text=${currencyMsg}&parse_mode=${parse_mode}`)
            })()
        }
        
        if(element.weather_message_time === timeString) {
            (async () => {
                const res = await axios.post(`https://api.telegram.org/bot1835794695:AAEYkz_tSEM-fNx-9fZYrYhXIo4n3UwnEyQ/sendMessage?chat_id=-520267406&text=${weatherMsg}&parse_mode=${parse_mode}`) 
            })()
        }
    })
}

index()


