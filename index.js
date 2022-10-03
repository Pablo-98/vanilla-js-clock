// we want to call a 
setInterval(setClock, 1000)

function setClock() {
    const currentDate = new Data() 
    const secondRatio = currentDate.getSeconds() /60
    const minutesRatio = (secondsRatio  + currentDate.getMinutes())/60
    const hoursRatio = currentDate.getHours() /60

}