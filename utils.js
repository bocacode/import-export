function convertCtoF(tempC) {
  return tempC * 1.8 + 32
}

function convertFtoC(tempF) {
  return (tempF - 32) / 1.8
} 

module.exports = { convertFtoC, convertCtoF }