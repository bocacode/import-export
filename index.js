// const convertCtoF = require('./utils').convertCtoF
// const convertFtoC = require('./utils').convertFtoC
const { convertCtoF, convertFtoC } = require('./utils')

const todaysHigh = 84

console.log('High today: ', todaysHigh + '°F', convertFtoC(todaysHigh) + '°C')

const lowTemp = 23 

console.log('Low today: ', convertCtoF(lowTemp) + '°F', lowTemp + '°C')