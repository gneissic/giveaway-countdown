const months = [
    "janaury",
    "febuary", 
    "march", 
    "april",
    "may",
    "june", 
    "july",
    "august", 
    "september",
    "october",
    "november",
    "december"
]
const weekdays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
]

const giveaway = document.querySelector(".giveaway")
const timeOut = document.querySelectorAll(".time-out h3")
const deadline = document.querySelector(".deadline-container")

const newDate = new Date(2023, 3, 12, 9, 30, 22)
const year = newDate.getFullYear()
let  month = newDate.getMonth() 
month = months[month]
const date  = newDate.getDate()
let  day = newDate.getDay()
 day = weekdays[day]
 const hour = newDate.getHours()
 const minute = newDate.getMinutes()
 giveaway.innerHTML = `giveaway ends on ${day}, ${date} ${month}, ${year}, ${hour}:${minute}pm`

//for the countdown
const giveDate = newDate.getTime()

function getRemainingTme() {
    const today = new Date().getTime() 
    const diff = newDate - today
    // we know......
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60ms
    // 1d = 24hrs
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000

    //lets calculate the values
    let  dDays = (diff/oneDay)
    dDays = Math.floor((diff/oneDay))

    let dHours = Math.floor((diff % oneDay)/oneHour)

   let  dMinute = Math.floor((diff % oneHour)/oneMinute)
    
   let dsecs = Math.floor((diff % oneMinute)/1000)

    function fortmat(e) {
        if (e < 10) {
            return e = `0 ${e}`
        }
            return e
    }
    if (diff <= 0) {
        clearInterval(countdown)
         deadline.innerHTML = ` <h3 class = "time-in">sorry, this giveaway has expired </h3>`
    }
    const arr = [dDays, dHours, dMinute, dsecs]
    timeOut.forEach(function(item, index) {
        item.innerHTML = fortmat(arr[index])
    })
}
let  countdown = setInterval(getRemainingTme, 1000)

getRemainingTme()

